import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-inline">
                        <li>
                            <a href="">
                                <img src="images/website.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="images/fb.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="images/insta.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="images/twitter.png" alt="" />
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
