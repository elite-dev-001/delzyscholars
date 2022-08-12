import React from 'react'

function WorkEnd() {
  return (
    <div className="section section-padding mt-n1">
        <div className="container">

            {/* <!-- Section Title Start --> */}
            <div className="section-title shape-03 text-center">
                <h5 className="sub-title">Over 35+ Course</h5>
                <h2 className="main-title">How It <span> Work?</span></h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- How it Work Wrapper Start --> */}
            <div className="how-it-work-wrapper">

                {/* <!-- Single Work Start --> */}
                <div className="single-work">
                    <img className="shape-1" src="assets/images/shape/shape-15.png" alt="Shape" />

                    <div className="work-icon">
                        <i className="flaticon-transparency"></i>
                    </div>
                    <div className="work-content">
                        <h3 className="title">Find Your Course</h3>
                        <p>Locate a course from any category of your choice</p>
                    </div>
                </div>
                {/* <!-- Single Work End --> */}

                {/* <!-- Single Work Start --> */}
                <div className="work-arrow">
                    <img className="arrow" src="assets/images/shape/shape-17.png" alt="Shape" />
                </div>
                {/* <!-- Single Work End --> */}

                {/* <!-- Single Work Start --> */}
                <div className="single-work">
                    <img className="shape-2" src="assets/images/shape/shape-15.png" alt="Shape" />

                    <div className="work-icon">
                        <i className="flaticon-forms"></i>
                    </div>
                    <div className="work-content">
                        <h3 className="title">Make Payments</h3>
                        <p>Payments are to be made only on this platform...</p>
                    </div>
                </div>
                {/* <!-- Single Work End --> */}

                {/* <!-- Single Work Start --> */}
                <div className="work-arrow">
                    <img className="arrow" src="assets/images/shape/shape-17.png" alt="Shape" />
                </div>
                {/* <!-- Single Work End --> */}

                {/* <!-- Single Work Start --> */}
                <div className="single-work">
                    <img className="shape-3" src="assets/images/shape/shape-16.png" alt="Shape" />

                    <div className="work-icon">
                        <i className="flaticon-badge"></i>
                    </div>
                    <div className="work-content">
                        <h3 className="title">Start Learning</h3>
                        <p>Get access to DelzyScholars redefined, easy to understand materials.</p>
                    </div>
                </div>
                {/* <!-- Single Work End --> */}

            </div>

        </div>
    </div>
  )
}

export default WorkEnd