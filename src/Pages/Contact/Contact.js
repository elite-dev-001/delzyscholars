import React from 'react'
import PageBanner from '../Auth/components/PageBanner'
import AppStart from '../Home/components/AppStart'
import ContactMap from './components/ContactMap'
import ContactStart from './components/ContactStart'

function Contact() {
  return (
    <> 
      <PageBanner text1='Contact Us' text2='Contact' text3='Us' />
      <ContactMap />
      <ContactStart />
      <AppStart />
    </>
  )
}

export default Contact