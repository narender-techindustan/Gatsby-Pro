import PropTypes from "prop-types"
import React from "react"
import ReviewClient1 from "../images/dummy-image-1.png"
import ReviewClient2 from "../images/dummy-image-2.png"
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";

const FacebookSec = ({ siteTitle }) => (
    <section className="facebook bg-color">
        <Grid>
            <Row>
                <div className="heading text-center">
                    <h2>Facebook Reviews</h2>
                </div>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className="Reviews">
                        <div className="profile">
                            <img src={ReviewClient1} alt="" />
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
                        <p>Perry organised everything. Our mutual client is really happy and so are we. Perry was easy to deal with and was very thorough.</p>
                    </div>
                </Col>
                <Col sm={12}>
                    <div className="Reviews">
                        <div className="profile">
                            <img src={ReviewClient2} alt="" />
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
                        <p>Always quick to response, helpful, no problem too big or too small and a pleasure to deal with.</p>
                    </div>
                </Col>
                <Col sm={12}>
                    <div className="Reviews">
                        <div className="profile">
                            <img src={ReviewClient1} alt="" />
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
                        <p>Always available and easy to talk to. They know what is wrong and how to fix it!</p>
                    </div>
                </Col>
            </Row>
        </Grid>
    </section>
)

FacebookSec.propTypes = {
  siteTitle: PropTypes.string,
}

FacebookSec.defaultProps = {
  siteTitle: ``,
}

export default FacebookSec
