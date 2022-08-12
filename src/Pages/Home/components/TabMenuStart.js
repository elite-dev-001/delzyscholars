import React from 'react'

function TabMenuStart() {
  return (
    // <!-- All Courses Tabs Menu Start -->
    <div className="courses-tabs-menu courses-active">
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios">
            <ul className="swiper-wrapper nav" id="swiper-wrapper-437e73e7b22c238f" aria-live="polite" style={{transitionDuration: "0ms", transform: "translate3d(-540px, 0px, 0px)"}}>
                <li className="swiper-slide" role="group" aria-label="1 / 7" style={{width: "240px", marginRight: "30px"}}><button className="active" data-bs-toggle="tab" data-bs-target="#tabs1">WAEC</button></li>
                <li className="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs2">JAMB</button></li>
                <li className="swiper-slide swiper-slide-active" role="group" aria-label="3 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs3">Uniport</button></li>
                <li className="swiper-slide swiper-slide-next" role="group" aria-label="4 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs4">Physics</button></li>
                <li className="swiper-slide" role="group" aria-label="5 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs5">Post-UTME</button></li>
                <li className="swiper-slide" role="group" aria-label="6 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs6">Chemistry</button></li>
                <li className="swiper-slide" role="group" aria-label="7 / 7" style={{width: "240px", marginRight: "30px"}}><button data-bs-toggle="tab" data-bs-target="#tabs7">Undergraduates</button></li>
            </ul>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

        {/* <!-- Add Pagination --> */}
        <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-437e73e7b22c238f" aria-disabled="false"><i className="icofont-rounded-right"></i></div>
        <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-437e73e7b22c238f" aria-disabled="false"><i className="icofont-rounded-left"></i></div>
    </div>
  )
}

export default TabMenuStart