import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TrialCircle = ({ siteTitle }) => (
    <section className="trial-circle">
        <div className="container">
            <div className="row">
                <div className="col infographic">
                    <img src="images/infographic.png" alt="" />
                </div>
            </div>
        </div>
    </section>
)

TrialCircle.propTypes = {
  siteTitle: PropTypes.string,
}

TrialCircle.defaultProps = {
  siteTitle: ``,
}

export default TrialCircle
