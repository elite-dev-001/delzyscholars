import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function TabMenuStart() {
  let [current, setCurrent] = useState(0)

const categories = ['UNIPORT', 'RSUST', 'IAUE', 'WAEC', 'JAMB', 'POST-UTME']


const next = () => {
  
  if(current < (categories.length -1)){
    current += 1;
    setCurrent(current)
  }
}
const prev = () => {
  if(current > 0){
    current -= 1;
    setCurrent(current)
  }
}


  return (
    // <!-- All Courses Tabs Menu Start -->
  <div className="courses-tabs-menu courses-active">
    <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
        <ul className="swiper-wrapper nav" id="swiper-wrapper-cd6db713b148e148" aria-live="polite">
            <li className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 7"><button className="active" data-bs-toggle="tab" data-bs-target="#tabs1"> {categories[current]} </button></li>
        </ul>
    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

    {/* <!-- Add Pagination --> */}
    <div onClick={() => next()} className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-cd6db713b148e148" aria-disabled="false"><i className="icofont-rounded-right"></i></div>
    <div onClick={() => prev()} className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-cd6db713b148e148" aria-disabled="false"><i className="icofont-rounded-left"></i></div>
</div>
  )
}

export default TabMenuStart