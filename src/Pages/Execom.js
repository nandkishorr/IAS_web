import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import './Styles/Execom.css'
import Sidetitle from '../Components/Sidetitle/Sidetitle'

function Execom() {

  return (
    <div className='execom container-fluid'>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
         <div className='row execom-row'>
          <ExecomPic  name="M  V Rajesh" position='Chapter Advisor' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FScreenshot_20230406-1127292.webp?alt=media&token=7f6e235b-bd21-4f73-9699-c6388f5b0992"/>
          <ExecomPic position="Chairperson" name='Swathy Sekhar' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FSwathy%20Sekhar.webp?alt=media&token=bbce2041-6ca0-4f7a-a2f1-eefe275c378b"/>
          <ExecomPic position="Vice-Chairperson" name='Akash G Nair' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FIMG_4383.webp?alt=media&token=84f95a93-2451-4068-b67e-6bcec62cbae3"/>
          <ExecomPic position="Secretary" name='Rohan K Abraham' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FIMG_20230404_010046.webp?alt=media&token=e8bb3b28-94ec-4b13-870f-46cce65ac1a9"/>
         </div>
      </div>
      <Sidetitle title="EXECOM"/>
    </div>
  )
}

export default Execom
