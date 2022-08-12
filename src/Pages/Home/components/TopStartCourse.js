import React from 'react'

function TopStartCourse() {
  return (
    // <!-- All Courses Top Start -->
    <div className="courses-top">

        {/* <!-- Section Title Start --> */}
        <div className="section-title shape-01">
            <h2 className="main-title">All <span>Courses</span> of DelzyScholars</h2>
        </div>
        {/* <!-- Section Title End --> */}

        {/* <!-- Courses Search Start --> */}
        <div className="courses-search">
            <form action="#">
                <input type="text" placeholder="Search your course" />
                <button><i className="flaticon-magnifying-glass"></i></button>
            </form>
        </div>
        {/* <!-- Courses Search End --> */}

    </div>
  )
}

export default TopStartCourse