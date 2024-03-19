import React from 'react'
import { SwipeCarousel } from './SwipeCarousel';

function About() {
  return (
    <div className="min-h-screen sm:flex sm:items-center sm:justify-evenly p-8">

        <div className="w-full h-full sm:w-1/2 sm:h-1/2">
            <SwipeCarousel />
        </div>

        <div className="text-center text-white max-w-md">
            <p className="dm-mono sm:text-lg md:text-xl">Chartered in 2014, University of Florida’s Association for Computing Machinery chapter 
                is its largest pre-professional computer science organization. Our chapter focuses on 
                helping students discover their passions, prepare for internships and careers, and make 
                friends and professional connections. We promote computer science education through 
                professional events, social events, and Special Interest Groups.
            </p>
        </div>
    </div>
  )
}

export default About