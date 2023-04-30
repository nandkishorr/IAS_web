import React from 'react'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import "./Styles/Awards.css"
import AwardTile from '../Components/Awards/AwardTile'
function Awards() {
  return (
    <div className='container-fluid'>
    <div className='m-5 awards  '>
    <div className='line line1'></div>
      <div className='title1'>
        <h1 className='heading-title'>AWARDS</h1></div>

      <div className='line line1'></div> 
    </div> 
      <div className='row m-5'>
        <AwardTile title="IAS CMD OUTSTANDING LARGE CHAPTER AWARD 2021"/>
        <AwardTile title="IAS CMD MOST HAPPENING CHAPTER AWARD 2022"/>
       
     
      </div> 
   

   
    <Sidetitle title="AWARDS"/>
    </div>
  )
}

export default Awards
