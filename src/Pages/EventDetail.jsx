import React from 'react'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import './Styles/EventDetail.css'
import Squares from '../Components/Squares/Squares'
function EventDetail() {
    return (
        <div className='event-detail container-fluid mb-5'>
            <div className="event-detail-header  m-5 row">
                <Heading title='EMERGENCE' />
                <Line />
            </div>
            <div className='row'>
                <div className="event-img col-lg-5">
                    <img src="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                </div>
                <div className="details col-lg-6 col-12">
                    <p>
                        "An investment in knowledge pays the best interest. "
                        ~Benjamin Franklin

                        Electrical design is an intrinsic part of any construction project which is responsible for the layout and design of electrical systems.

                        IEEE Power & Energy Society Student Branch Chapter College of Engineering Chengannur in collaboration with Women in Power psents RADICLE 2.0: Lay down the basics and radiate with IEEE, a monthly training program. We are delighted to conduct  a seven-day workshop on the topic Electrical System Design handled by *Er.Sandhya Sajeev, M tech Power Systems, MIE(I), CE(I)*.

                        This session will upskill you on the specific workflows of electrical control systems designers and how to design one yourself.

                        Date: 19th-20th, 24th-28th April 2023

                        Registration fee: ₹50

                        Register at: _*min.lc/radicle2.0*_
                    </p>
                    <div className="details-bottom mt-3">
                        <button>
                            Register
                        </button>
                        <Squares />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail