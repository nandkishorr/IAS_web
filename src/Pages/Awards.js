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
    <div className='row mx-5'>
        <AwardTile/>
      </div>
    <Sidetitle title="AWARDS"/>
    </div>
  )
}

export default Awards
