import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"
import PhoneIcon from "../images/phone.png"

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <a href="#" className="logo">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="col text-right header-right">
                    <img src={PhoneIcon} alt="" />
                    <a href="tel">1300 208 155</a>
                </div>
            </div>
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
