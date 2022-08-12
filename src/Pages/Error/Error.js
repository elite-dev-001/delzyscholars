import React from 'react'
import PageBanner from '../Auth/components/PageBanner'
import AppStart from '../Home/components/AppStart'
import ErrorStart from './components/ErrorStart'

function Error() {
  return (
    <>
      <PageBanner text1="404 Error" text2='Page Not' text3='Found' />
      <ErrorStart />
      <AppStart />
    </>
  )
}

export default Error