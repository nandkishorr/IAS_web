import React from 'react'
import"./Footer.css"
import { BsFacebook, BsGlobe2, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-main'>
        <div className='row row-cols-1 row-cols-sm-5 my-5'>
           <div className='col m-1'>
            <h3 className='footer-heading'>IAS SBC CEC </h3>
            <h6>HOME</h6>
            <h6>ABOUT</h6>
            <h6>EXECOM</h6>
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ABOUT</h3>
            <h6>IEEE IAS</h6>
            <h6>ACHIEVEMENTS</h6>
            <h6>IEEE SBC</h6>
            
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ENQUIRY</h3>
            <h6>CONTACT US</h6>
            <h6>WRITE A MAIL</h6>
            <h6>LOCATION</h6>
           </div>
           <div className='col m-1'>
        <div className='bottom1'>
        <div className='bot1'><BsInstagram/></div>
        <div className='bot1'><BsFacebook/></div> 
        <div className='bot1'><FaLinkedinIn/></div> 
        <div className='bot1'><BsGlobe2/></div>  
        <div className='botline1'>@Ieeesbcec</div>
        </div>
      </div>
    </div>
 </div>
            
    

   
  )
}

export default Footer
