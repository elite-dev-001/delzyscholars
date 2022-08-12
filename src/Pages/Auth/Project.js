import React from 'react'
import AppStart from '../Home/components/AppStart'
import PageBanner from './components/PageBanner'
import ProjectStart from './components/ProjectStart'

function Project() {
  return (
    <>
      <PageBanner text1='Project' text2='Project' text3='Form' img='https://res.cloudinary.com/dziy1glm5/image/upload/v1659554695/pexels-pixabay-261909_200x200_korwl6.jpg' />
      <ProjectStart />
      <AppStart />
    </>
  )
}

export default Project