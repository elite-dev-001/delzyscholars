import React from 'react'
import {HashLink as Link } from 'react-router-hash-link'
import ActionStart from './components/ActionStart'
import AppStart from './components/AppStart'
import Blog from './components/Blog'
import BrandLogo from './components/BrandLogo'
import CourseWrapper from './components/CourseWrapper'
import SliderStart from './components/SliderStart'
import TabMenuStart from './components/TabMenuStart'
import Testimonial from './components/Testimonial'
import TopStartCourse from './components/TopStartCourse'
import WorkEnd from './components/WorkEnd'

function Home() {
  return (
    <>
      <div className='overlay'></div>
      <SliderStart />
      <div className='section section-padding-02'>
        <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <Link className="btn btn-primary btn-hover-dark w-100" to='#instructor' smooth >Click to join DelzyScholars Instructors</Link>
        </div>
      </div>
      <ActionStart main='Book for a private session/tutorial. Both online & offline' span=' (WAEC, JAMB, PUTME, UNIPORT, RSUST, IAUE, UNIUYO e.t.c.)' sub='Private Session' btn='Book Now' link='/private' />
      <ActionStart main="Let's help you write your" span='I.T REPORT, RESEARCH PROJECT & MASTER THESIS' sub='REPORT, PROJECT & THESIS' btn='Sign Up' link='/project' />
      <ActionStart main='Purchase Delzy Study Materials' span=' (WAEC, JAMB, PUTME, UNIPORT, RSUST, IAUE, UNIUYO e.t.c.)' sub='Delzy Study Materials' btn='Purchase Now' link='#course' />
      <div className='section section-padding-02'>
        <div className='container'>
          <TopStartCourse />
          <TabMenuStart />
          <CourseWrapper />
        </div>
      </div>
      <ActionStart main="You can join with DelzyScholars as" span='an instructor. (TUTOR, PROJECT/THESIS WRITERS etc)' sub='Become An Instructor' btn='Drop Information' link='/instructor' />
      <WorkEnd />
      <AppStart />
      <Testimonial />
      <BrandLogo />
      <Blog />
    </>
  )
}

export default Home