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

function App() {

  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);


  return (
    <>
        <div className='splash-container'>
          <TitlePane/>
          <Menu/>
        </div>
        <Home/>

        {/* the below is for the movement on scroll for the about section that we talked about */}

        {/* <motion.div style={{ y }} className='about-container'>
          <About id='about'/> 
        </motion.div> */}

        <About id='about'/> 

        <h1 id='sponsors' className='flex justify-center p-4'>Sponsors</h1>
        <SponsorCarousel id='sponsors'/>
        <SIGs/>
        <Footer/>
    </>
  );
}

export default App;
