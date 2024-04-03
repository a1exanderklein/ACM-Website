import React from 'react'
import { SwipeCarousel } from './SwipeCarousel';
import CountUp from './CountUp';

function About() {
  return (
    <div className='bg-[#18191A]'>
      <div className='bg-[#141414]'>
        <div id='ACMstats' className='flex justify-evenly p-6 sm:pt-12'>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={2000} className="countUpText gradient-text1 sm:text-4xl" end={2019}/>
              <p className="text-sm sm:text-lg md:text-xl">Established</p>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={75} end={1} className="countUpText gradient-text2 sm:text-4xl" prefix='#'/>
              <div className='flex justify-center'>
                <div className='w-1/2'>
                  <p className="text-xs sm:text-lg md:text-xl">Largest UF Computing Organization</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center">
              <CountUp start={750} end={1900} className="countUpText gradient-text3 sm:text-4xl" formatNumber={true} suffix="+"/>
              <p className="text-sm sm:text-lg md:text-xl">Discord Members</p>
            </div>
          </div>
        </div>
      </div>

       <div className="sm:min-h-100 sm:flex sm:items-center sm:justify-evenly p-4">
          <div className="w-full h-full sm:w-1/2 sm:h-1/2">
              <SwipeCarousel />
          </div>

          <div className="text-center text-white max-w-md">
              <p className="dm-mono text-sm sm:text-lg md:text-xl">Chartered in 2014, University of Florida’s Association for Computing Machinery chapter 
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