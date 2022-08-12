import React from 'react'
import AppStart from '../Home/components/AppStart'
import PageBanner from './components/PageBanner'
import PrivateStart from './components/PrivateStart'

function Private() {
  return (
    <>
      <PageBanner text1='Private Tutor' text2='Private Tutor' text3='Form' img='https://res.cloudinary.com/dziy1glm5/image/upload/v1659555422/rsz_whatsapp_image_2022-08-03_at_45556_pm-removebg-preview_snomah.png' />
      <PrivateStart />
      <AppStart />
    </>
  )
}

export default Private