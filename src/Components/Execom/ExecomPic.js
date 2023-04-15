import React from 'react'
import "./ExecomPic.css"

function ExecomPic(props) {
    return (
        <div className='execom-tile col'>
            <div className='execom-pic '>
                <img src={props.link} alt='execom-pic' />
            </div>
            <div className="execom-name-box">
                <center>
                     <p className='execom-name'>postion</p>
                    <h3 className='execom-name'>name</h3>
                </center>
            </div>
        </div>
    )
}

export default ExecomPic