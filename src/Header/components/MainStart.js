import React from 'react'
import { Link } from 'react-router-dom'

function MainStart() {

  const openNav = () => {
    console.log('Open')
  }

  return (
    // <!-- Header Main Start -->
            <div className="header-main">
                <div className="container">

                    {/* <!-- Header Main Start --> */}
                    <div className="header-main-wrapper">

                        {/* <!-- Header Logo Start --> */}
                        <div className="header-logo">
                            <Link to="/"><img src="assets/images/logo2.png" alt="Logo" /></Link>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        {/* <!-- Header Menu Start --> */}
                        <div className="header-menu d-none d-lg-block">
                            <ul className="nav-menu">
                                <li><Link to='/'>Home</Link></li>
                                <li>
                                    <Link to="/login">My Courses</Link>
                                </li>
                                <li>
                                    <Link to="/about">About </Link>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>

                        </div>
                        {/* <!-- Header Menu End --> */}

                        {/* <!-- Header Sing In & Up Start --> */}
                        <div className="header-sign-in-up d-none d-lg-block">
                            <ul>
                                <li><Link className="sign-in" to="/login">Sign In</Link></li>
                                <li><Link className="sign-up" to="/register">Sign Up</Link></li>
                            </ul>
                        </div>
                        {/* <!-- Header Sing In & Up End --> */}

                        {/* <!-- Header Mobile Toggle Start --> */}
                        <div className="header-toggle d-lg-none">
                            <a onClick={() => openNav()} className="menu-toggle" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        {/* <!-- Header Mobile Toggle End --> */}

                    </div>
                    {/* <!-- Header Main End --> */}

                </div>
            </div>
  )
}

export default MainStart