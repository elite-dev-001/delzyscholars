import React from 'react'

function PageBanner(props) {
    const {text1, text2, text3, img} = props
  return (
    <div className="section page-banner">

        <img className="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape" />

        <img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />

        <div className="container">
            {/* <!-- Page Banner Start --> */}
            <div className="page-banner-content">
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active"> {text1} </li>
                </ul>
                <h2 className="title">{text2} <span> {text3} </span></h2>
            </div>
            {/* <!-- Page Banner End --> */}
        </div>

        {/* <!-- Shape Icon Box Start --> */}
        <div className="shape-icon-box">

            <img className="icon-shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape" />

            <div className="box-content">
                <div className="box-wrapper">
                    <i className="flaticon-badge"></i>
                </div>
            </div>

            <img className="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape" />

        </div>
        {/* <!-- Shape Icon Box End --> */}

        <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape" />

        <img className="shape-author" src={img} alt="Shape" />

    </div>
  )
}

export default PageBanner