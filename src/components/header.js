import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <a href="#" className="logo">
                        <img src="images/logo.png" alt="" />
                    </a>
                </div>
                <div className="col text-right header-right">
                    <img src="images/phone.png" alt="" />
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
