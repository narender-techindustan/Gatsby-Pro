import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FacebookSec = ({ siteTitle }) => (
    <section className="facebook bg-color">
        <div className="container">
            <div className="row">
                <div className="heading text-center">
                    <h2>Facebook Reviews</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="Reviews">
                        <div className="profile">
                            <img src="images/dummy-image-1.png" alt="" />
                        </div>
                        <div className="title-review">
                            <h6>Peter</h6>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <p>Perry organised everything. Our
                                mutual client is really happy and so
                                are we. Perry was easy to deal with
                                and was very thorough.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="Reviews">
                        <div className="profile">
                            <img src="images/dummy-image-2.png" alt="" />
                        </div>
                        <div className="title-review">
                            <h6>Rachel green</h6>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <p>Always quick to response, helpful,
                                no problem too big or too small and
                                a pleasure to deal with.
                                </p>
                    </div>
                </div>
                <div className="col">
                    <div className="Reviews">
                        <div className="profile">
                            <img src="images/dummy-image-1.png" alt="" />
                        </div>
                        <div className="title-review">
                            <h6>Peter</h6>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <p>Always available and easy to talk to.
                                They know what is wrong and how
                                to fix it!
                                </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

FacebookSec.propTypes = {
  siteTitle: PropTypes.string,
}

FacebookSec.defaultProps = {
  siteTitle: ``,
}

export default FacebookSec
