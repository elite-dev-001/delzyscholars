import React from 'react'
import AppStart from '../Home/components/AppStart'
import LoginStart from './components/LoginStart'
import PageBanner from './components/PageBanner'

function Login() {
  return (
    <>
      <PageBanner text1="Login" text2="Login" text3="Form" />
      <LoginStart />
      <AppStart />
    </>
  )
}

export default Login