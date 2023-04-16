import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
import Heading from '../Components/Heading'
import Line from '../Components/Line'
import './Styles/Execom.css'
function Execom() {
  return (
    <div className='execom container-fluid'>
      <div className='m-5'>
        <div className='row'>
        <Heading title='Execom' />
        <Line />
        </div>
         <div className='row execom-row'>
          <ExecomPic  name="M  V Rajesh" position='Chapter Advisor' link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic position="Chairperson" name='Swathy Sekhar' link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic position="Vice-Chairperson" name='Akash G Nair' link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic position="Secretary" name='Rohan K Abraham' link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
         </div>
      </div>
    </div>
  )
}

export default Execom
