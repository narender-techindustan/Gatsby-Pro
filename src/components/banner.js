import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Banner = ({ siteTitle }) => (
    <section className="banner">
        <div className="container">
            <div className="row banner1">
                <div className="col-6 work-your-plan">
                    <h1>Work your way </h1>
                    <h2>No more I.T constraints</h2>
                    <p>All your normal programs , all your normal files, all backed up & secure. But none of your normal. headaches</p>
                    <p>And no crazy price tag.</p>
                </div>
                <div className="col-6 image-right-banner">
                    <img src="images/header-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
