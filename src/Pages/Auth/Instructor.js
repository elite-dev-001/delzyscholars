import React from 'react'
import AppStart from '../Home/components/AppStart'
import PageBanner from './components/PageBanner'
import InstructorStart from './components/InstructorStart'

function Instructor() {
  return (
    <>
      <PageBanner text1='Instructor' text2='Instructor' text3='Form' img='https://res.cloudinary.com/dziy1glm5/image/upload/v1659554695/pexels-pixabay-261909_200x200_korwl6.jpg' />
      <InstructorStart />
      <AppStart />
    </>
  )
}

export default Instructor