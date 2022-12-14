import React from 'react'
import { Link } from 'react-router-dom'

function SingleCourse(props) {
    const {course} = props
  return (
    <div className="col-lg-4 col-md-6">
        {/* <!-- Single Courses Start --> */}
        <div className="single-courses">
            <div className="courses-images">
                <Link to='/login'><img src={course['courseImg']} alt="Courses" /></Link>
            </div>
            <div className="courses-content">
                <div className="courses-author">
                    <div className="author">
                        <div className="author-thumb">
                            <a href="#"><img src="https://www.simpleimageresizer.com/_uploads/photos/72f6adc0/WhatsApp_Image_2022-07-30_at_8.26.55_AM_1_131x131.jpeg" alt="Author" /></a>
                        </div>
                        <div className="author-name">
                            <a className="name" href="#"> {course['author']} </a>
                        </div>
                    </div>
                    <div className="tag">
                        <a href="#"> {course['category']} </a>
                    </div>
                </div>

                <h4 className="title"><a href="courses-details.html"> {course['title']} </a></h4>
                <div className="courses-meta">
                    <span> <i className="icofont-clock-time"></i> {course['courseCode']} </span>
                    <span> <i className="icofont-read-book"></i> + Past Questions </span>
                </div>
                <div className="courses-price-review">
                    <div className="courses-price">
                        <span className="sale-parice"> ₦ {course['courseAmount']} </span>
                        <span className="old-parice"> {course['oldPrice']} </span>
                    </div>
                    <div className="courses-review">
                        {/* <span className="rating-count"> {course['rating']} </span> */}
                        <span className="rating-star">
                                <span className="rating-bar" style={{width: "80%"}}></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Single Courses End --> */}
    </div>
  )
}

export default SingleCourse