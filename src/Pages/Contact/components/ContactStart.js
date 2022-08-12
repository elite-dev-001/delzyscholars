import React from 'react'

function ContactStart() {
  return (
    <div className="section section-padding">
        <div className="container">

            {/* <!-- Contact Wrapper Start --> */}
            <div className="contact-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        {/* <!-- Contact Info Start --> */}
                        <div className="contact-info">

                            <img className="shape animation-round" src="assets/images/shape/shape-12.png" alt="Shape" />

                            {/* <!-- Single Contact Info Start --> */}
                            <div className="single-contact-info">
                                <div className="info-icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <div className="info-content">
                                    <h6 className="title">Phone No.</h6>
                                    <p><a href="tel:88193326867">(234) 703-810-1576</a></p>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}
                            {/* <!-- Single Contact Info Start --> */}
                            <div className="single-contact-info">
                                <div className="info-icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <div className="info-content">
                                    <h6 className="title">Email Address.</h6>
                                    <p><a href="mailto:edule100@gmail.com">support@delzyscholars.com</a></p>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}
                            {/* <!-- Single Contact Info Start --> */}
                            <div className="single-contact-info">
                                <div className="info-icon">
                                    <i className="flaticon-pin"></i>
                                </div>
                                <div className="info-content">
                                    <h6 className="title">Office Address.</h6>
                                    <p>Smartech Global, Choba Uniport, River State</p>
                                </div>
                            </div>
                            {/* <!-- Single Contact Info End --> */}
                        </div>
                        {/* <!-- Contact Info End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Contact Form Start --> */}
                        <div className="contact-form">
                            <h3 className="title">Get in Touch <span>With Us</span></h3>

                            <div className="form-wrapper">
                                <form id="contact-form" action="../../../external.html?link=https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input type="text" name="name" placeholder="Name" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input type="email" name="email" placeholder="Email" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input type="text" name="subject" placeholder="Subject" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <p className="form-message"></p>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark w-100">Send Message <i className="flaticon-right"></i></button>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </form>
                            </div>
                        </div>
                        {/* <!-- Contact Form End --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Contact Wrapper End --> */}

        </div>
    </div>
  )
}

export default ContactStart