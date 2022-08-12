import React from 'react'

function AboutStart() {
  return (
    <div className="section">

        <div className="section-padding-02 mt-n10">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                        {/* <!-- About Images Start --> */}
                        <div className="about-images">
                            <div className="images">
                                <img src="assets/images/about.jpg" alt="About" />
                            </div>

                            <div className="about-years">
                                <div className="years-icon">
                                    <img src="assets/images/logo-icon.png" alt="About" />
                                </div>
                                <p><strong>10+</strong> Years Experience</p>
                            </div>
                        </div>
                        {/* <!-- About Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- About Content Start --> */}
                        <div className="about-content">
                            <h5 className="sub-title">Welcome to Delzy Scholars.</h5>
                            <h2 className="main-title">You can join with Delzy Scholars and upgrade your skill for your <span>bright future.</span></h2>
                            <p>Delzy Scholars is a registered Edutech company that helps learners easily hire the services of qualified tutors. <br/> Delzy Scholars was born out of passion for helping student build strong academic background while instilling in them the required knowledge & skills for academic excellence </p>
                            <a href="#" className="btn btn-primary btn-hover-dark">Start A Course</a>
                        </div>
                        {/* <!-- About Content End --> */}

                    </div>
                </div>
            </div>
        </div>

        <div className="section-padding-02 mt-n6">
            <div className="container">

                {/* <!-- About Items Wrapper Start --> */}
                <div className="about-items-wrapper">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* <!-- About Item Start --> */}
                            <div className="about-item">
                                <div className="item-icon-title">
                                    <div className="item-icon">
                                        <i className="flaticon-tutor"></i>
                                    </div>
                                    <div className="item-title">
                                        <h3 className="title">Top Instructors</h3>
                                    </div>
                                </div>
                                <p> We have successfully tutored and guided students preparing for the following exams which include </p>
                                <p>WAEC, NECO, JAMB, PUTME, PRE-DEGREE(REMEDIAL / BASIC), A-LEVEL (JUPEB), UNIPORT, RSU/UST, IAUE and many other SEMESTER EXAMS.</p>
                            </div>
                            {/* <!-- About Item End --> */}
                        </div>
                        <div className="col-lg-4">
                            {/* <!-- About Item Start --> */}
                            <div className="about-item">
                                <div className="item-icon-title">
                                    <div className="item-icon">
                                        <i className="flaticon-coding"></i>
                                    </div>
                                    <div className="item-title">
                                        <h3 className="title">Portable Program</h3>
                                    </div>
                                </div>
                                <p>Delzy Scholars was Founded in University of Portharcourt in 2013, and over the years we have impacted and improved the academic background of students in SECONDARY SCHOOLs & UNIVERSITIES.</p>
                                <p> </p>
                            </div>
                            {/* <!-- About Item End --> */}
                        </div>
                        <div className="col-lg-4">
                            {/* <!-- About Item Start --> */}
                            <div className="about-item">
                                <div className="item-icon-title">
                                    <div className="item-icon">
                                        <i className="flaticon-increase"></i>
                                    </div>
                                    <div className="item-title">
                                        <h3 className="title">Improve Quickly</h3>
                                    </div>
                                </div>
                                <p>We have also guided and will continue to guide students to the highest performance in the SECONDARY & UNIVERSITY (FIRST CLASS).</p>
                                <p>And Numerous second class upper as well as assisted many students get scholarships through our mentorship and counsel</p>
                            </div>
                            {/* <!-- About Item End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- About Items Wrapper End --> */}

            </div>
        </div>

    </div>
  )
}

export default AboutStart