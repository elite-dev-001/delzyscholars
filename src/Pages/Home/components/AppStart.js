import React from 'react'
import { Link } from 'react-router-dom'

function AppStart() {
  return (
    <div className="section section-padding download-section">

        <div className="app-shape-1"></div>
        <div className="app-shape-2"></div>
        <div className="app-shape-3"></div>
        <div className="app-shape-4"></div>

        <div className="container">

            {/* <!-- Download App Wrapper Start --> */}
            <div className="download-app-wrapper mt-n6">

                {/* <!-- Section Title Start --> */}
                <div className="section-title section-title-white">
                    <h5 className="sub-title">Ready to start?</h5>
                    <h2 className="main-title">Download our mobile app. for easy to start your course.</h2>
                </div>
                {/* <!-- Section Title End --> */}

                <img className="shape-1 animation-right" src="assets/images/shape/shape-14.png" alt="Shape" />

                {/* <!-- Download App Button End --> */}
                <div className="download-app-btn">
                    <ul className="app-btn">
                        <li><Link to="/"><img src="assets/images/google-play.png" alt="Google Play" /></Link></li>
                        <li><Link to="/"><img src="assets/images/app-store.png" alt="App Store" /></Link></li>
                    </ul>
                </div>
                {/* <!-- Download App Button End --> */}

            </div>
            {/* <!-- Download App Wrapper End --> */}

        </div>
    </div>
  )
}

export default AppStart