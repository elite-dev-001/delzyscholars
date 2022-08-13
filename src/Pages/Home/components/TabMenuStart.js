import React, { useState } from 'react'

function TabMenuStart() {
  const [waec, setWaec] = useState('')
  const [jamb, setJamb] = useState('')
  const [uniport, setUniport] = useState('')
  const [ust, setUst] = useState('swiper-slide-active')
  const [putme, setPutme] = useState('')
  const [current, setCurrent] = useState(2)
  // const [, set] = useState('')
  // const [, set] = useState('')
  const category = [setWaec, setJamb, setUniport, setUst, setPutme];

  const onNext = () => {
    console.log('Click')
      category[current]('')
      category[current+1]('swiper-slide-active')
      setCurrent(current + 1)
  }
  return (
    // <!-- All Courses Tabs Menu Start -->
    <div className="courses-tabs-menu courses-active">
        <div className="swiper-container">
            <ul className="swiper-wrapper nav">
                <li className={`swiper-slide ${waec}`}><button className="active" data-bs-toggle="tab" data-bs-target="#tabs1">Uniport</button></li>
                <li className={`swiper-slide ${jamb}`} role="group" aria-label="2 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs2">JAMB</button></li>
                <li className={`swiper-slide ${uniport} `} role="group" aria-label="3 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs3">WAEC</button></li>
                {/* <li className="swiper-slide swiper-slide-next" role="group" aria-label="4 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs4">Physics</button></li> */}
                <li className={`swiper-slide ${putme} swiper-slider-prev`} role="group" aria-label="5 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs5">Post-UTME</button></li>
                <li className={`swiper-slide ${ust}`} role="group" aria-label="6 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs6">RSUST</button></li>
                {/* <li className="swiper-slide" role="group" aria-label="7 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs7">Undergraduates</button></li> */}
            </ul>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

        {/* <!-- Add Pagination --> */}
        <div onClick={() => onNext()} className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-437e73e7b22c238f" aria-disabled="false"><i className="icofont-rounded-right"></i></div>
        <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-437e73e7b22c238f" aria-disabled="false"><i className="icofont-rounded-left"></i></div>
    </div>
  )
}

export default TabMenuStart