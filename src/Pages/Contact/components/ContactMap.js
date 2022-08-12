import React from 'react'

function ContactMap() {
  return (
    <div className="section section-padding-02">
        <div className="container">

        {/* <!-- Contact Map Wrapper Start --> */}
        <div className="contact-map-wrapper">
            {/* <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> */}
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=University%20of%20port%20harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        {/* <!-- Contact Map Wrapper End --> */}

        </div>
    </div>
  )
}

export default ContactMap


