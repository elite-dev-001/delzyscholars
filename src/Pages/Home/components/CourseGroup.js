import React from 'react'
import SingleCourse from './SingleCourse'

function CourseGroup(props) {
    const {active, id, courses} = props
  return (
    <div className={`tab-pane fade show ${active} `} id={id} >
        <div className='courses-wrapper'>
            <div className='row'>
                {
                    courses.map((course, index) => <SingleCourse key={index} course={course} /> )
                }
            </div>
        </div>
    </div>
  )
}

export default CourseGroup