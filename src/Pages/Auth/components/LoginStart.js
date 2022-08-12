import React from 'react'

function LoginStart() {
  return (
    <div className="section section-padding">
        <div className="container">

            {/* <!-- Register & Login Wrapper Start --> */}
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Images Start --> */}
                        <div className="register-login-images">
                            <div className="shape-1">
                                <img src="assets/images/shape/shape-26.png" alt="Shape" />
                            </div>


                            <div className="images">
                                <img src="assets/images/register-login.png" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Login <span>Now</span></h3>

                            <div className="form-wrapper">
                                <form action="#">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input type="email" placeholder="Username or Email" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100">Login</button>
                                        <a className="btn btn-secondary btn-outline w-100" href="#">Login with Google</a>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </form>
                            </div>
                        </div>
                        {/* <!-- Register & Login Form End --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Register & Login Wrapper End --> */}

        </div>
    </div>
  )
}

export default LoginStart