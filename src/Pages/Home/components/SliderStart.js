import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


function SliderStart() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false
    }
  return (
    // <!-- Slider Start -->
        <div className="section slider-section">

            {/* <!-- Slider Shape Start --> */}
            <div className="slider-shape">
                <img className="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape" />
            </div>
            {/* <!-- Slider Shape End --> */}

            <div className="container" style={{display: 'flex'}}>

                {/* <!-- Slider Content Start --> */}
                <div className="slider-content" style={{width: '100%'}}>
                    <h4 className="sub-title">Start your favourite course</h4>
                    <h2 className="main-title">Learning just got easy. Now you can learn from the comfort of your home, and build your <span>bright career.</span></h2>
                    <div >
                        <Slider {...settings}>
                            <div><p style={{margin: '1em auto', fontWeight: 'bold', fontSize: '1.4rem', color: '#309255'}}>Secondary</p></div>
                            <div><p style={{margin: '1em auto', fontWeight: 'bold', fontSize: '1.4rem', color: '#309255'}}>Pre-Degree (Remedial) </p></div>
                            <div><p style={{margin: '1em auto', fontWeight: 'bold', fontSize: '1.4rem', color: '#309255'}}>A-Level (JUPEB)</p></div>
                            <div><p style={{margin: '1em auto', fontWeight: 'bold', fontSize: '1.4rem', color: '#309255'}}>University (Tertiary Institution)</p> </div>
                        </Slider>
                    </div>
                    {/* <p>Book for a private session / tutorial . Both Online & Offline (Physical) Learning </p>
                    <Link className="btn btn-primary btn-hover-dark" to="/private">Book Now</Link>
                    <p>Purchase Delzy Study Material (JAMB/PUTME/WAEC), UNIPORT, RSU, etc... </p>
                    <Link className="btn btn-primary btn-hover-dark" to="/">Purchase Now</Link>
                    <p>Let's help you write your I.T REPORT, RESEARCH PROJECT & MASTER THESIS for Sciences & Engineering faculty</p>
                    <Link className="btn btn-primary btn-hover-dark" to="/project">Click here to sign up for the service</Link> */}
                </div>
                {/* <!-- Slider Content End --> */}

            </div>
            

            {/* <!-- Slider Courses Box Start --> */}
            {/* <div className="slider-courses-box" style={{top: '50%'}}> */}

                {/* <img className="shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape" /> */}

                {/* <div className="box-content">
                    <div className="box-wrapper">
                        <i className="flaticon-open-book"></i>
                        <span className="count">35+</span>
                        <p>courses</p>
                    </div>
                </div> */}

                {/* <img className="shape-2" src="assets/images/shape/shape-6.png" alt="Shape" /> */}

            {/* </div> */}
            {/* <!-- Slider Courses Box End --> */}

            {/* <!-- Slider Rating Box Start --> */}
            <div className="slider-rating-box">

                {/* <div className="box-rating">
                    <div className="box-wrapper">
                        <span className="count">4.8 <i className="flaticon-star"></i></span>
                        <p>Rating (86K)</p>
                    </div>
                </div> */}

                <img className="shape animation-up" src="assets/images/shape/shape-7.png" alt="Shape" />

            </div>
            {/* <!-- Slider Rating Box End --> */}

            {/* <!-- Slider Images Start --> */}
            <div className="slider-images" style={{position: 'relative'}}>
                <div className="images">
                    <img src="assets/images/slider/slider-2.png" alt="Slider" />
                </div>
            </div>
            {/* <!-- Slider Images End --> */}

            {/* <!-- Slider Video Start --> */}
            <div className="slider-video">
                <img className="shape-1" src="assets/images/shape/shape-9.png" alt="Shape" />
                {/* <div>Hello</div> */}
                <div className="video-play">
                    <img src="assets/images/shape/shape-10.png" alt="Shape" />
                    <a href="#" className="play video-popup"><i className="flaticon-play"></i></a>
                </div>
            </div>
            {/* <!-- Slider Video End --> */}

        </div>
  )
}

export default SliderStart