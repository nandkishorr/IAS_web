import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
function Execom() {
  return (
    <div className='execom container-fluid'>
      <div className='row m-5'>
          <ExecomPic link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic />
          <ExecomPic />
          <ExecomPic />
      </div>
    </div>
  )
}

export default Execom
