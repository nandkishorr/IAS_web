import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
import Heading from '../Components/Heading'
function Execom() {
  return (
    <div className='execom container-fluid'>
      <div className='row m-5'>
        <Heading title='Execom' />
          <ExecomPic link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic  link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic  link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
          <ExecomPic  link="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"/>
      </div>
    </div>
  )
}

export default Execom
