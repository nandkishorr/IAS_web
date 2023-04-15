import React from 'react'
import styles from "./Styles/About.module.css"
import Heading from '../Components/Heading'
function About() {
  return (
    <div className={styles.body}>
       <Heading title="About"/>
      <div className={styles.content}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}

export default About
