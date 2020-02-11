import PropTypes from "prop-types"
import React from "react"
import Infographic from "../images/infographic.png"

const TrialCircle = ({ siteTitle }) => (
    <section className="trial-circle">
        <div className="container">
            <div className="row">
                <div className="col infographic">
                    <img src={Infographic} alt="" />
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
