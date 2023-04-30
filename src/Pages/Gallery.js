import React from 'react'
import Heading from "../Components/Heading/Heading"
import Sidetitle from "../Components/Sidetitle/Sidetitle"
import { Carousel } from 'react-responsive-carousel'
import Line from '../Components/Line/Line'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Styles/Gallery.css"
function Gallery() {
  return (
    <div className='container-fluid'>
      <div className='m-5 gallery row'>
        <Heading title="GALLERY" />
        <Line />
      </div>
      <div className="carousel-part">
        <div className="carousel">
        <Carousel showArrows={true} interval={2000} infiniteLoop={true} autoFocus={true} stopOnHover={false} autoPlay={true}>
        <div>
          <img alt='' src="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0478%20(1).webp?alt=media&token=ecbe1b0b-59df-408f-9ef9-5de16a6b31b9" />
        </div>
        <div>
          <img alt='' src="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0033(1).webp?alt=media&token=6d8f2fd3-305b-482b-ab4e-798d93b10d7b" />

        </div>
        <div>
          <img alt='' src="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0354%20(1).webp?alt=media&token=684944de-5378-4f62-8511-34db76d9121c" />

        </div>
        <div>
          <img alt='' src="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0030.webp?alt=media&token=34b071aa-102f-4d1c-b02e-fa5ce31d4764" />

        </div>
      </Carousel>
        </div>
      </div>
      <Sidetitle title="GALLERY" />
    </div>
  )
}

export default Gallery
