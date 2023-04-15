import React from 'react'
import styles from "./Styles/About.module.css"
function About() {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <h1 className={styles.heading}>ABOUT</h1>
      </div>
      <div className={styles.content}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}

export default About
