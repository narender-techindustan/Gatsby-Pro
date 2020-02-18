import PropTypes from "prop-types"
import React from "react"
import WebsiteIcon from "../images/website.png"
import FbIcon from "../images/fb.png"
import InstaIcon from "../images/insta.png"
import TwitterIcon from "../images/twitter.png"
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";

const Footer = ({ siteTitle }) => (
    <footer>
        <Grid>
            <Row>
                <Col sm={6}>
                    <ul className="list-inline">
                        <li>
                            <a href="">
                                <img src={WebsiteIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={FbIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={InstaIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={TwitterIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col sm={6} className="text-right right-side">
                    <p>Cloud Networks Australia Pty.Ltd © 2018</p>
                </Col>
            </Row>
        </Grid>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
