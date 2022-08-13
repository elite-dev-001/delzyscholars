import React from 'react'

function Testimonial() {
  return (
    <div className="section section-padding-02 mt-n1">
        <div className="container">

            {/* <!-- Section Title Start --> */}
            <div className="section-title shape-03 text-center">
                <h5 className="sub-title">Student Testimonial</h5>
                <h2 className="main-title">Feedback From <span> Student</span></h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Testimonial Wrapper End --> */}
            <div className="testimonial-wrapper testimonial-active">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper" id="swiper-wrapper-5094b1e9a85310f410" aria-live="polite" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                            {/* <!-- Single Testimonial Start --> */}
                            <div className="single-testimonial swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" style={{width: "360px", marginRight: "30px"}}>
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1660330291/WhatsApp_Image_2022-08-06_at_12.55.31_PM_pdwpec.jpg" alt="Author" />

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%"}}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>It's exactly what I've been looking for. Delzy scholars, online learning has completely surpassed our expectations. I STRONGLY recommend Delzy scholars, online learning to EVERYONE interested in having a successful academic performance!</p>
                                    <h4 className="name">Egbejuma Faith</h4>
                                    <span className="designation"> Pharmacy, Uniport</span>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial End --> */}

                            {/* <!-- Single Testimonial Start --> */}
                            <div className="single-testimonial swiper-slide swiper-slide-next" role="group" aria-label="2 / 3" style={{width: "360px", marginRight: "30px"}}>
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1660330290/WhatsApp_Image_2022-08-06_at_4.08.45_PM_zqqhq8.jpg" alt="Author" />

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%"}}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>I just can't get enough of Delzy scholars, online learning. I want to get a T-Shirt with Delzy scholars, on it so I can show it off to everyone. It's the perfect solution for Academic Success</p>
                                    <h4 className="name">Nwii Waazor Barilee</h4>
                                    {/* <span className="designation">Product Designer, USA</span> */}
                                </div>
                            </div>
                            {/* <!-- Single Testimonial End --> */}

                            {/* <!-- Single Testimonial Start --> */}
                            <div className="single-testimonial swiper-slide" role="group" aria-label="3 / 3" style={{width: "360px", marginRight: "30px"}}>
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1660330290/WhatsApp_Image_2022-08-06_at_12.21.31_AM_oyza3i.jpg" alt="Author" />

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%"}}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>No matter where you go, Delzy scholars, online learning is the coolest, most happening thing around! Delzy scholars, online learning is worth much more than I paid. Since I started in Delzy scholars, online learning I made tremendous progress academically. I am completely blown away.</p>
                                    <h4 className="name">Miracle Ikedimma</h4>
                                    <span className="designation">Uniport, Port Harcourt</span>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial End --> */}
                        </div>

                        {/* <!-- Add Pagination --> */}
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
            {/* <!-- Testimonial Wrapper End --> */}

        </div>
    </div>
  )
}

export default Testimonial