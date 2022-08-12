import React from 'react'
import {HashLink as Link } from 'react-router-hash-link'

function ActionStart(props) {
    const {sub, main, btn, span, link} = props
  return (
    <div className="section section-padding-02">
        <div className="container">

            {/* <!-- Call to Action Wrapper Start --> */}
            <div className="call-to-action-wrapper">

                <img className="cat-shape-01 animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />
                <img className="cat-shape-02" src="assets/images/shape/shape-13.svg" alt="Shapes" />
                <img className="cat-shape-03 animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />

                <div className="row align-items-center">
                    <div className="col-md-6">

                        {/* <!-- Section Title Start --> */}
                        <div className="section-title shape-02">
                            <h5 className="sub-title">{ sub }</h5>
                            <h2 className="main-title">{main} <span>{span}</span></h2>
                        </div>
                        {/* <!-- Section Title End --> */}

                    </div>
                    <div className="col-md-6">
                        <div className="call-to-action-btn">
                            <Link className="btn btn-primary btn-hover-dark" to={link} smooth>{btn}</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Call to Action Wrapper End --> */}

        </div>
    </div>
  )
}

export default ActionStart