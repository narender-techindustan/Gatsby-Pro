import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ContactUs = ({ siteTitle }) => (
    <section>
        <div className="container">
            <div className="row">
                <div className="heading text-center">
                    <h2>Contact us</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <textarea>Message</textarea>
                    <button type="submit" className="btn-submit">Send</button>
                </div>
            </div>
        </div>
    </section>
)

ContactUs.propTypes = {
  siteTitle: PropTypes.string,
}

ContactUs.defaultProps = {
  siteTitle: ``,
}

export default ContactUs
