import React from 'react'

const About = () => {
    return (
        <div>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white">
                        About
                    </h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="lead">
                                I am a freelance web developer have a decent knowldege on the
                                agile practice of a web application.
                            </p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="lead">
                                Expert on PHP based web development such are CMS like WordPress,
                                Framework like CodeIgniter , Laravel and webservices like REST API
                            </p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="lead">
                                Expert on the trending frontend technologies like HTML5, Vue JS,
                                Bootstrap,JS, JQuery and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <a
                            className="btn btn-xl btn-outline-light"
                            href="https://www.linkedin.com/in/suman-maji-1808/"
                        ><i className="fab fa-linkedin-in mr-2"></i>LinkedIn</a
                        >
                    </div>
                </div>
            </section></div>
    )
}

export default About