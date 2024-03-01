import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return(
    <div className='App'>
      <Home/>
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
