import './App.css';
import NavBar from './components/NavBar';
import TitlePane from './components/TitlePane';
import Gradient from './assets/mesh-gradient.png';

function App() {
  return (
    <>

      

        <div className='splash-container'>
          <TitlePane/>
        </div>
        <img src={Gradient} className='mesh-gradient' />
        <h1>About</h1>


        





    </>
  );
}

export default App;
