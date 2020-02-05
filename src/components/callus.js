import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const CallForUs = ({ siteTitle }) => (
    <section className="call-for-us">
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <h3>Call us for a quote or a free 30days trial</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. </p>
                </div>
                <div className="col-5 text-right tel-phone">
                    <a href="" className="telphone">
                        <img src="images/call.png" alt="cell" /> 1300 218 155</a>
                </div>
            </div>
        </div>
    </section>
)

CallForUs.propTypes = {
  siteTitle: PropTypes.string,
}

CallForUs.defaultProps = {
  siteTitle: ``,
}

export default CallForUs
