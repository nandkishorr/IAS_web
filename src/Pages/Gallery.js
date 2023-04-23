import React from 'react'
import Heading from "../Components/Heading"
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
          <img alt='' src="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        </div>
        <div>
          <img alt='' src="https://images.unsplash.com/photo-1682070410768-1bd8c48cbdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

        </div>
        <div>
          <img alt='' src="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />

        </div>
      </Carousel>
        </div>
      </div>
      <Sidetitle title="GALLERY" />
    </div>
  )
}

export default Gallery
