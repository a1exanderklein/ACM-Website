import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function TitlePane() {
  return (
    <div className=''>
      <div className='title-bg'></div>
      <div className='title-text-container'>
        <h1 className='title-text sm:text-5xl md:text-6xl lg:text-7xl text-2xl'>Association for Computing Machinery</h1>
        <p className='disc-text'>University of Florida’s Largest Pre-Professional Computer Science Community</p>
        <div className='flex items-center'><a href="https://discord.gg/wcYxbcgbVN" className='discord-btn'></a></div>
        <div className='arrow-container'><IoIosArrowDown className='arrow-icon'/></div>
      </div>
      
     

    </div>
    
    
  )
}

export default TitlePane