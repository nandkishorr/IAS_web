import React from 'react'
import "./Styles/Contact.css"
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import Heading from '../Components/Heading'
import Line from '../Components/Line/Line'
function Contacts() {
  return (
    <div className='contact-main container-fluid'>
      <div className='m-5'>
        <div className='row'>
        <Heading title='CONTACT US' />
        <Line />
        </div>
         <div className='row execom-row'>
          
         </div>
      </div>
      <Sidetitle title="CONTACT US"/>
    </div>
  )
}

export default Contacts
