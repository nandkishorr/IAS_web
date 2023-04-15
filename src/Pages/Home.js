import React from 'react'
import styles from "./Styles/Home.module.css"
function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.mid}>
        <h1 className={styles.heading}>
          <span>INDUSTRIAL</span><br />
          <span>APPLICATION</span>
          <span className={styles.span}>SOCIETY</span></h1>
         <h3 className={styles.subheading}>
          <span>IEEE Student Branch Chapter</span><br />
          <span>College of Engineering Chengannur</span></h3> 
      </div>
    </div>
  )
}

export default Home
