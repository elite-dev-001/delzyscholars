import React from 'react'
import PageBanner from '../Auth/components/PageBanner'
import ActionStart from '../Home/components/ActionStart'
import AppStart from '../Home/components/AppStart'
import BrandLogo from '../Home/components/BrandLogo'
import Testimonial from '../Home/components/Testimonial'
import AboutStart from './components/AboutStart'

function About() {
  return (
    <>
      <PageBanner text1="About" text2="About" />
      <AboutStart />
      <ActionStart main="You can join with DelzyScholars as" span='an instructor' sub='Become An Instructor' btn='Drop Information' link='/instructor' />
      <Testimonial />
      <BrandLogo />
      <AppStart />
    </>
  )
}

export default About