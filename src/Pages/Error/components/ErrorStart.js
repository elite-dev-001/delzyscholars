import React from 'react'

function ErrorStart() {
  return (
    <div className="section section-padding mt-n10">
        <div className="container">

            {/* <!-- Error Wrapper Start --> */}
            <div className="error-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* <!-- Error Images Start --> */}
                        <div className="error-images">
                            <img src="assets/images/error.png" alt="Error" />
                        </div>
                        {/* <!-- Error Images End --> */}
                    </div>
                    <div className="col-lg-6">
                        {/* <!-- Error Content Start --> */}
                        <div className="error-content">
                            <h5 className="sub-title">This Page is Not Found.</h5>
                            <h2 className="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                            <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                            <a href="index.html" className="btn btn-primary btn-hover-dark">Back To Home</a>
                        </div>
                        {/* <!-- Error Content End --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Error Wrapper End --> */}

        </div>
    </div>
  )
}

export default ErrorStart