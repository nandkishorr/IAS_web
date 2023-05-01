import React from 'react'
import "./Styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className="homebody">
        <div className='container-fluid mid'>
          <h1 className='heading1 row'>
            <span >INDUSTRY</span><br />
            <span className=' col-lg-8 col-sm-12'>APPLICATIONS</span>
            <span className='span1  col-lg-4 col-sm-12'>SOCIETY</span>
          </h1>
          <h3 className='subheading'>
            <span>IEEE Student Branch Chapter</span><br />
            <span>College of Engineering Chengannur</span></h3>
        </div>

      </div>
      <div className='container-fluid'>
        <div className="row">
          <div className='col-lg-12'>
            <div className="m-v-box">
              <div>
              <h1>MISSION</h1>
              </div>
              <p>The prime objective of IEEE Industry Applications Society is to lead the way in the progress of science and technology by establishing a strong link between theoretical concepts and practical applications of electrical and electronic systems. The ultimate aim of this endeavor is to provide concrete benefits to humanity. IEEE IAS SBC CEC strives to promote sustainable and economical developments towards the society.</p>
            </div>
          </div>
         <div className="col-lg-12">
         <div className="m-v-box">
            <div>
            <h1>VISION</h1>
            </div>
            <p>
              IEEE Industry Applications Society assumes a crucial responsibility in promoting the progress of theoretical knowledge and practical application concerning the creation, development, and implementation of safe, eco-friendly, and intelligent electrical systems, equipment, and services. By fulfilling this role, the society aims to establish a collaborative platform that encourages learning, knowledge dissemination, and empowers professionals and researchers globally to make meaningful contributions to the field.
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>

  )
}

export default Home
