/**
 * ACM Design Team
 * 
 * References:
 * - https://mui.com/material-ui/react-snackbar/
 * - https://mui.com/material-ui/react-alert/
 * - https://mui.com/material-ui/react-dialog/
 * - https://mui.com/material-ui/react-button/
 * - https://firebase.google.com/docs/build
*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Alert, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HomeIcon from '@mui/icons-material/Home';
import { auth, db } from './firebase/firebaseConfig'; // Import Firebase configuration
import { doc, getDoc, setDoc, collection, query, where, getDocs, updateDoc, increment, serverTimestamp } from 'firebase/firestore';
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ParticlesComponent from './components/ParticlesComponent';
import ACMLogo from "./assets/acmlogo.png";

const Checkin = () => {
  //state variables
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  //updated 2025: graduationYear (as string for input and validation)
  const [graduationYear, setGraduationYear] = useState('');

  //controls whether the additional input fields are shown
  // (They are shown when either a new user is registering or an existing user is missing a graduation year)
  const [showNameFields, setShowNameFields] = useState(false);
  //updated 2025: Determines whether this is a new user registration (true) or an existing user who needs to update grad year (false)
  const [isNewUser, setIsNewUser] = useState(false);

  const [isCheckInDisabled, setIsCheckInDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  //nav hook
  const navigate = useNavigate();

  //on mount, ensure the user is signed in anonymously
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth);
      }
    });
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  //validate that the email is a @ufl.edu email using regex FML
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@ufl\.edu$/.test(email);

  //updated 2025: Validate that the graduation year is in the form "20xx"
  const validateGraduationYear = (year) => /^20\d\d$/.test(year);

  //adjust the disabled state of the submit button when the additional fields are shown
  // • If it's a new user, require firstName, lastName, AND a valid graduationYear
  // • Otherwise, for an existing user missing grad year, only require a valid graduationYear
  useEffect(() => {
    if (showNameFields) {
      if (isNewUser) {
        if (
          firstName.trim().length >= 2 &&
          lastName.trim().length >= 2 &&
          validateGraduationYear(graduationYear)
        ) {
          setIsCheckInDisabled(false);
        } else {
          setIsCheckInDisabled(true);
        }
      } else {
        if (validateGraduationYear(graduationYear)) {
          setIsCheckInDisabled(false);
        } else {
          setIsCheckInDisabled(true);
        }
      }
    } else {
      setIsCheckInDisabled(true);
    }
  }, [firstName, lastName, graduationYear, showNameFields, isNewUser]);

  //check if the user document exists in Firestore
  const checkUserExists = async () => {
    const emailId = email.toLowerCase().replace(/\./g, '_');
    const userRef = doc(db, "users", emailId);
    const userSnapshot = await getDoc(userRef);
    return userSnapshot.exists();
  };

  //check if there is an active meeting
  const checkActiveMeeting = async () => {
    const meetingsRef = collection(db, "MeetingTimeFrames");
    const currentTime = new Date();
    const meetingQuery = query(
      meetingsRef,
      where("startTime", "<=", currentTime),
      where("endTime", ">=", currentTime)
    );
    const meetingSnapshot = await getDocs(meetingQuery);
    return !meetingSnapshot.empty ? meetingSnapshot.docs[0].id : null;
  };

  //main submission handler for checking in
  //updated 2025: this now also handles prompting for graduation year if missing 
  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setAlertMessage('Invalid email. Please use a @ufl.edu email.');
      setOpenAlert(true);
      return;
    }
  
    try {
      const emailId = email.toLowerCase().replace(/\./g, '_');
      const userExists = await checkUserExists();

      //if the user does not exist, prompt for name fields + graduation year
      if (!userExists) {
        setIsNewUser(true);
        setShowNameFields(true);
        setAlertMessage('Looks like this is your first time here. Please enter your first name, last name, and graduation year.');
        setOpenAlert(true);
        return;
      }
      
      //if the user exists, check if the graduationYear field is present
      const userRef = doc(db, "users", emailId);
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();
      if (!userData.graduationYear) {
        setIsNewUser(false); //existing user missing grad year
        setShowNameFields(true);
        setAlertMessage('Please enter your graduation year (in the form 20xx) to proceed with check-in.');
        setOpenAlert(true);
        return;
      }
  
      //check if there is an active meeting
      const activeMeetingId = await checkActiveMeeting();
      if (!activeMeetingId) {
        setAlertMessage('Sorry, there is no active ACM meeting at this time.');
        setOpenAlert(true);
        return;
      }
  
      //check if the user has already checked in for this meeting
      const attendanceRef = doc(db, "AttendanceRecords", `${emailId}_${activeMeetingId}`);
      const attendanceDoc = await getDoc(attendanceRef);
      if (attendanceDoc.exists()) {
        setAlertMessage('You have already checked in for this meeting.');
        setOpenAlert(true);
        return;
      }
  
      //register the user's attendance
      await setDoc(attendanceRef, {
        email: email,
        meetingId: activeMeetingId,
        timestamp: serverTimestamp(),
      });
  
      //update the total attendance for the user
      await updateDoc(userRef, {
        totalAttendance: increment(1),
      });
  
      //alert the user that they have checked in
      setDialogContent('You have checked in, attendance recorded.');
      setOpenDialog(true);
  
    } catch (err) {
      console.error(err);
      setAlertMessage('Error connecting to server.');
      setOpenAlert(true);
    }
  };

  //update 2025: this function now handles both new user registration (with name fields and graduation year)
  // and updating an existing user's graduation year
  const handleNameSubmit = async () => {
    // For a new user, first name and last name are required
    if (isNewUser && (!firstName || !lastName)) {
      setAlertMessage('First name and last name are required.');
      setOpenAlert(true);
      return;
    }
    //validate graduation year
    if (!validateGraduationYear(graduationYear)) {
      setAlertMessage('Graduation year must be in the form 20xx.');
      setOpenAlert(true);
      return;
    }

    try {
      const emailId = email.toLowerCase().replace(/\./g, '_');
      const userRef = doc(db, "users", emailId);
  
      if (isNewUser) {
        //create new user document with graduationYear stored as an integer
        await setDoc(userRef, {
          email: email,
          firstName: firstName,
          lastName: lastName,
          graduationYear: parseInt(graduationYear, 10),
          totalAttendance: 0,
        });
  
        //sign in anonymously
        await signInAnonymously(auth)
          .then(() => {
            console.log("User signed in anonymously after registration.");
          })
          .catch((error) => {
            console.error("Error during anonymous sign-in:", error);
            setAlertMessage('Error signing in after registration.');
            setOpenAlert(true);
            return;
          });
  
        setAlertMessage('Student registered successfully. You are now signed in.');
        setOpenAlert(true);
        setShowNameFields(false);
        //continue with check-in
        handleSubmit();
      } else {
        //for an existing user missing graduationYear, update their document
        await updateDoc(userRef, {
          graduationYear: parseInt(graduationYear, 10)
        });
        setAlertMessage('Graduation year updated successfully.');
        setOpenAlert(true);
        setShowNameFields(false);
        //continue with check-in
        handleSubmit();
      }
    } catch (err) {
      console.error(err);
      setAlertMessage('Error connecting to server.');
      setOpenAlert(true);
    }
  };

  return (
    <>
      <div className='relative min-h-screen flex items-center justify-center'>
        <ParticlesComponent/>

        {/* Home button */}
        <IconButton onClick={handleHomeClick} sx={{ position: 'absolute', top: 16, left: 16, color: 'white' }}>
          <HomeIcon sx={{ fontSize: '40px' }} />
        </IconButton>

        <img src={ACMLogo} alt="UF ACM" className="absolute top-6 right-6 w-40" />

        {/* Check-in modal */}
        <div className="w-3/4 sm:w-full sm:max-w-md p-8 bg-[#0000008d] rounded shadow-md absolute backdrop-blur-sm z-50 checkin-modal">
          <h2 className="mb-6 text-2xl disc-text text-center">ACM Attendance</h2>
          <div className="flex justify-center p-3">
            <TextField
              label="Enter Your UFL Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
              sx={{
                fontFamily: 'Poppins',
                input: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' },
                },
                '& .MuiInputLabel-root': { color: 'white' },
              }}
            />
          </div>

          {/* When additional fields are required (either for registration or updating graduation year) */}
          {showNameFields && (
            <div>
              {isNewUser && (
                <>
                  <div className="flex justify-center p-3">
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mb-4"
                      sx={{
                        fontFamily: 'Poppins',
                        input: { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                        '& .MuiInputLabel-root': { color: 'white' },
                      }}
                    />
                  </div>
                  <div className="flex justify-center p-3">
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mb-4"
                      sx={{
                        fontFamily: 'Poppins',
                        input: { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'white' },
                          '&:hover fieldset': { borderColor: 'white' },
                          '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                        '& .MuiInputLabel-root': { color: 'white' },
                      }}
                    />
                  </div>
                </>
              )}
              <div className="flex justify-center p-3">
                <TextField
                  label="Graduation Year"
                  variant="outlined"
                  fullWidth
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className="mb-4"
                  sx={{
                    fontFamily: 'Poppins',
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                    '& .MuiInputLabel-root': { color: 'white' },
                  }}
                />
              </div>
              <div className="flex justify-center">
                <div className="w-3/4 p-3">
                  <Button
                    sx={{
                      color: 'BA8FF8',
                      fontFamily: 'Poppins',
                    }}
                    variant="contained"
                    fullWidth
                    onClick={handleNameSubmit}
                    disabled={isCheckInDisabled}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* If no additional fields are needed, show the Check In button */}
          {!showNameFields && (
            <div className="flex justify-center">
              <div className="w-3/4 p-3">
                <Button
                  sx={{
                    color: 'BA8FF8',
                    fontFamily: 'Poppins',
                  }}
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Check In
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Snackbar for Alert Messages */}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={() => setOpenAlert(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenAlert(false)}
            severity={
              alertMessage.includes('successful')
                ? 'success'
                : alertMessage.includes('enter')
                ? 'info'
                : 'error'
            }
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>

        {/* Dialog for Success or Error Messages */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              backgroundColor: '#292929',
              color: 'white',
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center' }}>
            <DoneAllIcon sx={{ marginRight: '8px', color: '#4caf50' }} />
            Success
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ color: 'white' }}>
              {dialogContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOpenDialog(false)}
              variant="contained"
              sx={{
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
              }}
              startIcon={<DoneAllIcon />}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <div className='absolute bottom-6'>
          <p className="leading-5 text-[12px] md:text-xs md:leading-7">
            Designed by the <b>ACMake Design Team</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkin;
