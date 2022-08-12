import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MainStart from './components/MainStart'
import TopStart from './components/TopStart'


function Header() {
    const [open, setOpen] = useState('')

    let navigate = useNavigate()
    

    const openNav = () => setOpen('open')
    const menuClose = () => setOpen('')
  return (
    <>
        <div className='header-section'>
            <TopStart />
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
                                <li><Link to='/' >Home</Link></li>
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
        </div>
        <div className={`mobile-menu ${open}`}>
        {/* <!-- Menu Close Start --> */}
            <a onClick={() => menuClose()} className="menu-close" href="#">
                <i className="icofont-close-line"></i>
            </a>
            {/* <!-- Menu Close End --> */}

            {/* <!-- Mobile Top Medal Start --> */}
            <div className="mobile-top">
                <p><i className="flaticon-phone-call"></i> <a href="tel:07038101576">(234) 703-810-1576</a></p>
                <p><i className="flaticon-email"></i> <a href="mailto:support@delzyscholars.com">support@delzyscholars.com</a></p>
            </div>
            {/* <!-- Mobile Top Medal End --> */}

            {/* <!-- Mobile Sing In & Up Start --> */}
            <div className="mobile-sign-in-up">
                <ul>
                    <li><Link onClick={() => menuClose()} className="sign-in" to="/login">Sign In</Link></li>
                    <li><Link onClick={() => menuClose()} className="sign-up" to="/register">Sign Up</Link></li>
                </ul>
            </div>
            {/* <!-- Mobile Sing In & Up End --> */}
            <div className="mobile-menu-items">
                <ul className="nav-menu">
                    <li><Link onClick={() => menuClose()} to='/'>Home</Link></li>
                    <li>
                        <Link onClick={() => menuClose()} to="/login">My Courses</Link>
                    </li>
                    <li>
                        <Link onClick={() => menuClose()} to="/about">About </Link>
                    </li>
                    <li><Link onClick={() => menuClose()} to="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* <!-- Mobile Menu End --> */}
            <div className="mobile-social">
                <ul className="social">
                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="flaticon-skype"></i></a></li>
                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                </ul>
            </div>
            {/* <!-- Mobile Menu End --> */}
        </div>
    </>
  )
}

export default Header