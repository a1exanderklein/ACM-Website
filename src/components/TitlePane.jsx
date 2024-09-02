import React from 'react'
import { IoIosArrowDown } from "react-icons/io";





function TitlePane() {
  return (
    <div className=''>
      <div className='title-bg'></div>
      <div className='title-text-container'>
        <h1 className='title-text xl:text-6xl 2xl:text-7xl text-5xl'>Association for Computing Machinery</h1>
        <p className='disc-text xl:text-2xl text-xl'>University of Florida’s Largest Pre-Professional Computer Science Community</p>
        <div className='flex disc-container'>
          <div className='items-center'><a href="https://discord.gg/wcYxbcgbVN" className='discord-btn'></a></div>
          <div className='items-center'><a href="#/checkin" className='checkin-btn'></a></div>
        </div>
        <div className='arrow-container disc-container'><IoIosArrowDown className='arrow-icon'/></div>
      </div>
      
     

    </div>
    
    
  )
}

export default TitlePane