import React from 'react'
import"./Footer.css"
import { BsFacebook, BsGlobe2, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-main'>
        <div className='row row-cols-1 row-cols-lg-5 '>
           <div className='col m-1'>
           <h3 className='footer-heading'>IAS SBC CEC </h3>
            <h6><a href='/' className='nav-link'>HOME</a></h6>
            <h6><a href='/about' className='nav-link'>ABOUT</a></h6>
            <h6><a href='/execom' className='nav-link'>EXECOM</a></h6>
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ABOUT</h3>
            <h6><a href='/about' className='nav-link'>IEEE IAS</a></h6>
            <h6><a href='/awards' className='nav-link'>ACHIEVEMENTS</a></h6>
            <h6><a href='/awards' className='nav-link'>IEEE SBC</a></h6>
            
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ENQUIRY</h3>
            <h6><a href='/contacts' className='nav-link'>CONTACT US</a></h6>
            <h6>WRITE A MAIL</h6>
            <h6><a href='/contacts' className='nav-link'>LOCATION</a></h6>
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
