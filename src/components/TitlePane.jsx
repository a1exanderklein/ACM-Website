import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function TitlePane() {
  return (
    <div>
      <div className='title-bg'></div>
      <div className='title-text-container'>
        <h1 className='title-text'>Association for Computing Machinery</h1>
        <p className='disc-text'>University of Florida’s Largest Pre-Professional Computer Science Community</p>
        <div className='arrow-container'><IoIosArrowDown className='arrow-icon'/></div>
      </div>
      {/* <div className='disc-text-container'>
        <p>University of Florida’s Largest Pre-Professional Computer Science Community</p>
      </div> */}
      
     

    </div>
    
    
  )
}

export default TitlePane