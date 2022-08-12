import React from 'react'

function SingleCourse(props) {
    const {course} = props
  return (
    <div className="col-lg-4 col-md-6">
        {/* <!-- Single Courses Start --> */}
        <div className="single-courses">
            <div className="courses-images">
                <a href="courses-details.html"><img src={course['courseImg']} alt="Courses" /></a>
            </div>
            <div className="courses-content">
                <div className="courses-author">
                    <div className="author">
                        <div className="author-thumb">
                            <a href="#"><img src="https://www.simpleimageresizer.com/_uploads/photos/72f6adc0/WhatsApp_Image_2022-07-30_at_8.26.55_AM_1_131x131.jpeg" alt="Author" /></a>
                        </div>
                        <div className="author-name">
                            <a className="name" href="#"> {course['authorName']} </a>
                        </div>
                    </div>
                    <div className="tag">
                        <a href="#"> {course['courseType']} </a>
                    </div>
                </div>

                <h4 className="title"><a href="courses-details.html"> {course['courseTitle']} </a></h4>
                <div className="courses-meta">
                    <span> <i className="icofont-clock-time"></i> {course['courseDuration']} </span>
                    <span> <i className="icofont-read-book"></i> {course['courseLectures']} </span>
                </div>
                <div className="courses-price-review">
                    <div className="courses-price">
                        <span className="sale-parice"> {course['coursePrice']} </span>
                        <span className="old-parice"> {course['oldPrice']} </span>
                    </div>
                    <div className="courses-review">
                        <span className="rating-count"> {course['rating']} </span>
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