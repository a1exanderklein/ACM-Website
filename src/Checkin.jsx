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
import  ACMLogo  from "./assets/acmlogo.png";


const Checkin = () => {
  // State variables 
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');

  const [showNameFields, setShowNameFields] = useState(false); // state to control name fields
  const [isCheckInDisabled, setIsCheckInDisabled] = useState(true); // state to disable Check In button
  const [alertMessage, setAlertMessage] = useState(''); // state to set Alert message
  const [openAlert, setOpenAlert] = useState(false); // state to control Alerts ('Snackbars')
  const [openDialog, setOpenDialog] = useState(false); // State to control Dialog
  const [dialogContent, setDialogContent] = useState(''); // State to set Dialog content

  // initialize navigation hook for router dom
  const navigate = useNavigate();

  // Firebase onAuthStateChanged callback function to check if user is signed in anonymously
  // If user is not signed in, sign in anonymously
  useEffect(() => {
    // onAuthStateChanged callback function
    onAuthStateChanged(auth, (user) => {
      // If user is not signed in (i.e. no user object is returned)
      if (!user) {
        // Sign in anonymously using Firebase's signInAnonymously function
        signInAnonymously(auth);
      }
    });
    // Dependency array is empty, so this effect only runs once when component mounts
  }, []);

  // handles click event for home button using router dom navigate method
  const handleHomeClick = () => {
    navigate('/');
  }

  // Validate email method must be in the form of a @ufl.edu email
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@ufl\.edu$/.test(email);

  
  // useEffect hook to check if first name and last name have been entered
  // If so, enable the Check In button, otherwise disable it
  useEffect(() => {
    // If showNameFields is true and first name and last name
    // have been entered, enable the Check In button
    if (showNameFields && firstName.length >= 2 && lastName.length >= 2) {
      setIsCheckInDisabled(false);
    } else {
      // Otherwise, disable the Check In button
      setIsCheckInDisabled(true);
    }
  }, [firstName, lastName, showNameFields]);

  // Check if the user already exists in Firestore by looking up a document
  // in the "users" collection with the email address as the document ID.
  const checkUserExists = async () => {
    const emailId = email.toLowerCase().replace(/\./g, '_');//   The email address is converted to lowercase and periods are replaced with 
    const userRef = doc(db, "users", emailId); //  * underscores to match the document ID format used by the web app
    const userSnapshot = await getDoc(userRef);
    return userSnapshot.exists();
  };

  // Check if there is an active meeting
  const checkActiveMeeting = async () => {
    const meetingsRef = collection(db, "MeetingTimeFrames"); // create reference to meetings collection under the given string name
    const currentTime = new Date(); // Use JavaScript Date for the current time
    const meetingQuery = query(
      meetingsRef,
      where("startTime", "<=", currentTime),
      where("endTime", ">=", currentTime)
    );
    // If there is at least one meeting in the snapshot, return the ID of the first meeting
    // Otherwise, return null
    const meetingSnapshot = await getDocs(meetingQuery);
    return !meetingSnapshot.empty ? meetingSnapshot.docs[0].id : null;
  };
  
  // Main submission handler for actually checking in
  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setAlertMessage('Invalid email. Please use a @ufl.edu email.');
      setOpenAlert(true);
      return;
    }
  
    // Check if the user already exists
    try {
      const userExists = await checkUserExists();
  
      // If the user doesn't exist, spawn the name fields in
      if (!userExists) {
        setShowNameFields(true);
        setAlertMessage('Looks like this is your first time here. Please enter your first and last name.');
        setOpenAlert(true);
        return;
      }
  
      // Check if there is an active meeting
      const activeMeetingId = await checkActiveMeeting();
  
      // If there is no active meeting, alert the user
      if (!activeMeetingId) {
        setAlertMessage('Sorry, there is no active ACM meeting at this time.');
        setOpenAlert(true);
        return;
      }
  
      // Check if the user has already checked in for this meeting
      const emailId = email.toLowerCase().replace(/\./g, '_');
      const attendanceRef = doc(db, "AttendanceRecords", `${emailId}_${activeMeetingId}`);
      const attendanceDoc = await getDoc(attendanceRef);
  
      // If the user has an entry in the AttendanceRecords collection, alert the user that they can't checkin again
      if (attendanceDoc.exists()) {
        setAlertMessage('You have already checked in for this meeting.');
        setOpenAlert(true);
        return;
      }
  
      // Register the user's attendance
      await setDoc(attendanceRef, {
        email: email,
        meetingId: activeMeetingId,
        timestamp: serverTimestamp(),
      });
  
      // Update the total attendance for the user
      const userRef = doc(db, "users", emailId);
      await updateDoc(userRef, {
        totalAttendance: increment(1),
      });
  
      // Alert the user that they have checked in
      setDialogContent('You have checked in, attendance recorded.');
      setOpenDialog(true);
  
    } catch (err) {
      console.error(err);
      setAlertMessage('Error connecting to server.');
      setOpenAlert(true);
    }
  };

  // Handle submission when first name and last name are provided
  const handleNameSubmit = async () => {
    // if the user hasn't entered both first and last name, alert the user
    if (!firstName || !lastName) {
      setAlertMessage('First name and last name are required.');
      setOpenAlert(true);
      return;
    }

    try {
      // reformat the email address to lowercase and replace periods with underscores
      const emailId = email.toLowerCase().replace(/\./g, '_');
      // just a object to represent the user
      const userRef = doc(db, "users", emailId);

      // Register new user
      await setDoc(userRef, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        totalAttendance: 0,
      });

      // Just lets the user access stuff before theyre technically authenticated. Breaks if this isnt here :|
      await signInAnonymously(auth)
      .then(() => {
        // If the sign-in is successful
        console.log("User signed in anonymously after registration.");
      })
      .catch((error) => {
        // If there's an error during sign-in
        console.error("Error during anonymous sign-in:", error);

        // Set state variables for the alerts incase
        setAlertMessage('Error signing in after registration.');
        setOpenAlert(true);

        // Return to stop further execution in case of an error
        return;
      });

      // set state variables
      setAlertMessage('Student registered successfully. You are now signed in.');
      setOpenAlert(true);
      setShowNameFields(false); // Hide name fields after registration

      // Automatically call handleSubmit after user creation to check for active meeting and log attendance
      handleSubmit();

    } catch (err) {
      console.error(err);
      setAlertMessage('Error connecting to server.');
      setOpenAlert(true);
    }
  };
      

  // I used alot of Material UI here, so if you see any components that are capitalized their probably from there
  // LINK: https://mui.com/material-ui/all-components/
  return (
    <>
      <div className='relative min-h-screen flex items-center justify-center'>
      <ParticlesComponent/>

      
      {/* Home button icon in the top left, uses the useNavigate hook from react-router-dom in handleHomeClick */}
      <IconButton onClick={handleHomeClick} sx={{ position: 'absolute', top: 16, left: 16, color: 'white' }}>
        <HomeIcon sx={{ fontSize: '40px' }} />
      </IconButton>

      <img src={ACMLogo} alt="UF ACM" className="absolute top-6 right-6 w-40" />

      {/* The checkin page background uses the officer card background image */}
      
        {/* Checkin page modal FIXME: if you want to change the background of the modal like making it the particles
            you can do it here some how */}
        <div className="w-full max-w-md p-8 bg-[#0000008d] rounded shadow-md absolute backdrop-blur-sm z-50 checkin-modal">
          <h2 className="mb-6 text-2xl disc-text text-center">ACM Attendance</h2>
          <div className="flex justify-center p-3">
            {/* TextField for Email - Material UI component
                https://mui.com/material-ui/react-text-field/ 
            */}
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
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
            />
          </div>

          {/* if the state variable showNameFields is true, show the name fields */}
          {showNameFields && (
            <div>
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
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
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
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
                  }}
                />
              </div>
              <div className="flex justify-center">
                <div className="w-3/4 p-3">
                  {/* Button for submitting name fields, this button will also implicitly check in the student &
                      only appears if the state variable showNameFields is true, uses Material UI's button
                      feel free to change it to a regular buton should be fine i think 
                  */}
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

          {/* The checkin button will only appear if the state variable showNameFields is true, rest of the logic
              is handled elsewhere 
          */}
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

        {/* Snackbar for Alert Messages - Material UI component
            https://mui.com/material-ui/react-snackbar/ */}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={() => setOpenAlert(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {/* Alert component from Material UI - https://mui.com/material-ui/react-alert/ */}
          <Alert
            onClose={() => setOpenAlert(false)}
            severity={alertMessage.includes('successful') ? 'success' : alertMessage.includes('enter') ? 'info' : 'error'}
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>

        {/* Dialog for Success or Error Messages - Material UI component
            https://mui.com/material-ui/react-dialog/ */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              backgroundColor: '#292929', // Dark background color
              color: 'white', // Text color
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center' }}>
          <DoneAllIcon sx={{ marginRight: '8px', color: '#4caf50' }} /> {/* Green checkmark icon */}
          Success
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ color: 'white' }}>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* Button to close the dialog */}
          <Button
            onClick={() => setOpenDialog(false)}
            variant="contained"
            sx={{
              backgroundColor: '#4caf50', // Custom button color
              color: 'white',
              '&:hover': {
                backgroundColor: '#388e3c', // Darker green on hover
              },
            }}
            startIcon={<DoneAllIcon />} // Optional: Icon next to text
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
        <div className='absolute bottom-6'><p className="leading-5 text-[12px] md:text-xs md:leading-7 ">Designed by the <b>ACMake Design Team</b></p></div>
      </div>
    </>
  );
};

export default Checkin;