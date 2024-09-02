import './App.css';
import Landing from './Landing';
import Checkin from './Checkin';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/checkin' element={<Checkin/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
