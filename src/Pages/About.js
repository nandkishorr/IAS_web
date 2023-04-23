import React from 'react'
import styles from "./Styles/About.module.css"
import Heading from '../Components/Heading/Heading'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
function About() {
  return (
    <div className={styles.body}>
       <Heading title="ABOUT"/>
       <div className={styles.box}></div>
      <div className={styles.content}><p><b>IEEE IAS SBC CEC</b> is one of the most active student branch chapters known for its consistent achievements since its inception. With time, <b>IEEE IAS SBC CEC</b> has turned out a source of professional power with its 95 members as of 2021. With our consistent effort and practice, we have been able to raise the membership count from 95 to 185 by 2022 and maintain a healthy retention rate.

Within four years since its inception, <b>IAS SBC CEC</b> has been able to bag 2 awards with its growing membership count and healthy retention rate.</p>
<b>Our achievements :</b><ul>
  <li>IAS CMD OUTSTANDING LARGE CHAPTER AWARD 2021</li>
  <li>IAS CMD MOST HAPPENING CHAPTER AWARD 2022</li>
 
</ul>


<b>OFFICE BEARERS</b><br />
<b>Chapter Advisor</b> : Dr. M. V. Rajesh <br />
<b>Chairperson</b> : Swathy Sekhar <br />
 <b>Vice-Chairperson</b> : Akash G Nair <br />
<b>Secretary</b>: Rohan K Abraham</div>
<Sidetitle title="ABOUT"/>
      
    </div>
  )
}

export default About
