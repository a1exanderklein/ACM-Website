import './App.css';
import NavBar from './components/NavBar';
import TitlePane from './components/TitlePane';
import Gradient from './assets/mesh-gradient.png';
import Home from './components/Home';
import Menu from './components/Menu'
function App() {
  return (
    <>
        <div className='splash-container'>
          <TitlePane/>
          <Menu/>
        </div>
        <Home/>
        <h1 id='about'>About</h1>
        <h1 id='sponsors'>Sponsors</h1>
        <h1 id='sigs'>Sigs</h1>
    </>
  );
}

export default App;
