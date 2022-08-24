import React from 'react'
import { useParams } from 'react-router-dom'

function Admin() {
    const {id, token} = useParams()
    console.log(id, token)
  return (
    <div className='section overflow-hidden position-relative' id='wrapper'>
        <div className='sidebar-wrapper'>
            <div className='menu-list'>
                <h1>Hello</h1>
                <a className='active' href='#'><img src='assets/images/menu-icon/icon-1.png' alt='icon' /></a>
            </div>
        </div>
    </div>
  )
}

export default Admin