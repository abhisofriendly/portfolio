import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Salboni, Paschim Medinipur<br />West Bengal, 721147
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <Link to="https://www.facebook.com/suman.maji.1808" className="btn btn-outline-light btn-social mx-1"> 
                            <i className="fab fa-fw fa-facebook-f"></i>
                            </Link>

                            <Link to="https://www.facebook.com/suman.maji.1808" className="btn btn-outline-light btn-social mx-1"> 
                            <i className="fab fa-fw fa-twitter"></i>
                            </Link>

                            <Link to="https://www.linkedin.com/in/suman-maji-1808/" className="btn btn-outline-light btn-social mx-1"> 
                            <i className="fab fa-fw fa-linkedin-in"></i>
                            </Link>
                            
                            <Link to="https://github.com/GEEKSUMAN" className="btn btn-outline-light btn-social mx-1"> 
                            <i className="fab fa-fw fa-github"></i>
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Sherspect</h4>
                            <p className="lead mb-0">
                                Sherspect is my personal blog. This theme is created by
                                <a href="https://www.linkedin.com/in/suman-maji-1808/"
                                >Suman Maji</a
                                >.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer