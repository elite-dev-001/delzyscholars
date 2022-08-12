import React from 'react'

function Blog() {
  return (
    <div className="section section-padding mt-n1">
        <div className="container">

            {/* <!-- Section Title Start --> */}
            <div className="section-title shape-03 text-center">
                <h5 className="sub-title">Latest News</h5>
                <h2 className="main-title">Educational Tips & <span> Tricks</span></h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Blog Wrapper Start --> */}
            <div className="blog-wrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-6">

                        {/* <!-- Single Blog Start --> */}
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="#"><img src="assets/images/blog/blog-01.jpg" alt="Blog" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-author">
                                    <div className="author">
                                        <div className="author-thumb">
                                            <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author" /></a>
                                        </div>
                                        <div className="author-name">
                                            <a className="name" href="#">Jason Williams</a>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <a href="#">Science</a>
                                    </div>
                                </div>

                                <h4 className="title"><a href="#">UTME: JAMB fixes date for mop-up examination</a></h4>

                                <div className="blog-meta">
                                    <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                    <span> <i className="icofont-heart"></i> 2,568+ </span>
                                </div>

                                <a href="#" className="btn btn-secondary btn-hover-primary">Read More</a>
                            </div>
                        </div>
                        {/* <!-- Single Blog End --> */}

                    </div>
                    <div className="col-lg-4 col-md-6">

                        {/* <!-- Single Blog Start --> */}
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="#"><img src="assets/images/blog/blog-02.jpg" alt="Blog" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-author">
                                    <div className="author">
                                        <div className="author-thumb">
                                            <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author" /></a>
                                        </div>
                                        <div className="author-name">
                                            <a className="name" href="#">Pamela Foster</a>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <a href="#">UX Design</a>
                                    </div>
                                </div>

                                <h4 className="title"><a href="#">JAMB outlaws NABTEB certificate for direct entry into tertiary institutions</a></h4>

                                <div className="blog-meta">
                                    <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                    <span> <i className="icofont-heart"></i> 2,568+ </span>
                                </div>

                                <a href="#" className="btn btn-secondary btn-hover-primary">Read More</a>
                            </div>
                        </div>
                        {/* <!-- Single Blog End --> */}

                    </div>
                    <div className="col-lg-4 col-md-6">

                        {/* <!-- Single Blog Start --> */}
                        <div className="single-blog">
                            <div className="blog-image">
                                <a href="#"><img src="assets/images/blog/blog-03.jpg" alt="Blog" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-author">
                                    <div className="author">
                                        <div className="author-thumb">
                                            <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author" /></a>
                                        </div>
                                        <div className="author-name">
                                            <a className="name" href="#">Patricia Collins</a>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <a href="#">Business</a>
                                    </div>
                                </div>

                                <h4 className="title"><a href="#">Bill to make JAMB result valid for four years passes second reading</a></h4>

                                <div className="blog-meta">
                                    <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                    <span> <i className="icofont-heart"></i> 2,568+ </span>
                                </div>

                                <a href="#" className="btn btn-secondary btn-hover-primary">Read More</a>
                            </div>
                        </div>
                        {/* <!-- Single Blog End --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Blog Wrapper End --> */}

        </div>
    </div>
  )
}

export default Blog