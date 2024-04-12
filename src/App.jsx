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
import ACMFish from './assets/acmlogo.png';
import { useState, useEffect } from 'react';

function App() {

  const [ isSmall, setIsSmall ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
        <div className='splash-container'>
          {isSmall && <span className='fish-conatiner'>
             <img src={ACMFish} alt='ACM' className='fish'/>
          </span>}
          
          <TitlePane/ >
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
