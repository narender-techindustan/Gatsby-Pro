import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"
import PhoneIcon from "../images/phone.png"
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";

const Header = ({ siteTitle }) => (
    <header>
        <Grid>
            <Row>
                <Col sm={6}>
                    <a href="#" className="logo">
                        <img src={Logo} alt="" />
                    </a>
                </Col>
                <Col sm={6} className="text-right header-right">
                    <img src={PhoneIcon} alt="" />
                    <a href="tel">1300 208 155</a>
                </Col>
            </Row>
        </Grid>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
