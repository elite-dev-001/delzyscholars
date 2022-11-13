import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import data from '../../../data'
import CourseGroup from './CourseGroup'

function CourseWrapper() {
  let [current, setCurrent] = useState(0)
  const [data, setData] = useState([])

  const categories = ['UNIPORT', 'RSUST', 'IAUE', 'WAEC', 'JAMB', 'POST-UTME']
  
  
  const next = () => {
    
    if(current < (categories.length -1)){
      current += 1;
      setCurrent(current)
    }
  }

  const prev = () => {
    if(current > 0){
      current -= 1;
      setCurrent(current)
    }
  }

  useEffect(() => {
    axios.get(`https://thoughtful-pullover-worm.cyclic.app/api/materials/get/all/materials?category=${categories[current]}`).then((res) => {
      console.log(res.data)
      const results = res.data['results']
      setData(results)
    }).catch((err) => {
      console.log(err)
    })
  }, [ current])


  return (
    <>
    <div className="courses-tabs-menu courses-active">
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
            <ul className="swiper-wrapper nav" id="swiper-wrapper-cd6db713b148e148" aria-live="polite">
                <li className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 7"><button className="active" data-bs-toggle="tab" data-bs-target="#tabs1"> {categories[current]} </button></li>
            </ul>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

        {/* <!-- Add Pagination --> */}
        <div onClick={() => next()} className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-cd6db713b148e148" aria-disabled="false"><i className="icofont-rounded-right"></i></div>
        <div onClick={() => prev()} className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-cd6db713b148e148" aria-disabled="false"><i className="icofont-rounded-left"></i></div>
    </div>
    <div className='tab-content courses-tab-content' id='course'>
        {
            data.length !== 0 ? <CourseGroup courses={data} /> : <div className='section section-padding-02'>
              <div className='container'>
                <h3 style={{textAlign: 'center'}}>No Available Courses Yet</h3>
              </div>
            </div>
        }
    </div>
    </>
  )
}

export default CourseWrapper