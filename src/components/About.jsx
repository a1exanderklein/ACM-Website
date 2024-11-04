import React from 'react'
import { SwipeCarousel } from './SwipeCarousel';
import CountUp from './CountUp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1.0
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0, 
        transition: { duration: 1.5 } 
      });
    } else {
      controls.start({ opacity: 0, y: 20 }); 
    }
  }, [controls, inView]);

  return (
    <div className='bg-[#18191A]' id='about'>
      <div className='bg-[#141414] h-1/2'>
        <div id='ACMstats' className='flex justify-evenly align-center py-11'>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={2000} className="countUpText gradient-text1 sm:text-5xl" end={2014}/>
              <motion.p ref={ref} animate={controls} initial={{ opacity: 0 }} className="text-sm sm:text-lg md:text-xl pt-3">Established in</motion.p>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={75} end={1} className="countUpText gradient-text2 sm:text-5xl" prefix='#'/>
              <div className='flex justify-center'>
                <div className='w-1/2'>
                <motion.p ref={ref} animate={controls} initial={{ opacity: 0 }} className="text-xs sm:text-lg md:text-xl pt-3">Largest UF Computing Organization</motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={750} end={2100} className="countUpText gradient-text3 sm:text-5xl" formatNumber={true} suffix="+"/>
              <motion.p ref={ref} animate={controls} initial={{ opacity: 0 }} className="text-sm sm:text-lg md:text-xl pt-3">Virtual Members</motion.p>
            </div>
          </div>
        </div>
      </div>

       <div className="sm:min-h-100 sm:flex sm:items-center sm:justify-evenly p-4">
          <div className="w-full h-full sm:w-1/2 sm:h-1/2">
              <SwipeCarousel />
          </div>

          <div className="text-center text-white max-w-md">
              <p className="dm-mono text-sm sm:text-lg md:text-xl">University of Florida’s Association for Computing Machinery chapter 
                  is its largest pre-professional computer science organization. Our chapter focuses on 
                  helping students discover their passions, prepare for internships and careers, and make 
                  friends and professional connections. We promote computer science education through 
                  professional events, social events, and Special Interest Groups.
              </p>
          </div>
        </div>

    </div>
    
   
  )
}

export default About