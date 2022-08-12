import React from 'react'
import data from '../../../data'
import CourseGroup from './CourseGroup'

function CourseWrapper() {
  return (
    <div className='tab-content courses-tab-content' id='course'>
        {
            data.map((courses, index) => <CourseGroup key={index} id={courses['id']} active={courses['active']} courses={courses['courses']} /> )
        }
    </div>
  )
}

export default CourseWrapper