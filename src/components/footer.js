import PropTypes from "prop-types"
import React from "react"
import WebsiteIcon from "../images/website.png"
import FbIcon from "../images/fb.png"
import InstaIcon from "../images/insta.png"
import TwitterIcon from "../images/twitter.png"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
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
                </div>
                <div className="col text-right right-side">
                    <p>Cloud Networks Australia Pty.Ltd © 2018</p>
                </div>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
