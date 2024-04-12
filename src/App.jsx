import './App.css';
import NavBar from './components/NavBar';
import TitlePane from './components/TitlePane';
import Gradient from './assets/mesh-gradient.png';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import SponsorCarousel from './components/SponsorCarousel';
import SIGs from './components/SIGs';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Footer from './components/Footer';
import Officers from './components/Officers';

function App() {


  return (
    <>
        <div className='splash-container'>
          <TitlePane/>
          <Menu/>
        </div>
        <Home/>
        <About id='about'/> 
        <Officers/>
        <h1 id='sponsors' className='flex justify-center p-4'>Sponsors</h1>
        <SponsorCarousel id='sponsors'/>
        <SIGs/>
        <Footer/>
    </>
  );
}

export default App;
