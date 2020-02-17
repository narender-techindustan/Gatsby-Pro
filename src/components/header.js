import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"
import PhoneIcon from "../images/phone.png"
import {Row} from "react-bootstrap"

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <Row>
                <div className="col">
                    <a href="#" className="logo">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="col text-right header-right">
                    <img src={PhoneIcon} alt="" />
                    <a href="tel">1300 208 155</a>
                </div>
            </Row>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
