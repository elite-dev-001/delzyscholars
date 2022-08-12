import React from 'react'
import AppStart from '../Home/components/AppStart'
import PageBanner from './components/PageBanner'
import RegisterStart from './components/RegisterStart'

function Register() {
  return (
    <>
      <PageBanner text1='Register' text2='Registration' text3='Form' />
      <RegisterStart />
      <AppStart />
    </>
  )
}

export default Register