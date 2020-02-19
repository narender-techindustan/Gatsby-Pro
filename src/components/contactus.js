import PropTypes from "prop-types"
import React from "react"
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const ContactUs = ({ siteTitle }) => (
    <section>
        <Container>
            <Row>
                <div className="heading text-center">
                    <h2>Contact us</h2>
                </div>
            </Row>
            <Row>
                <Col md={4}>
                    <input type="text" className="form-control" placeholder="Name" />
                </Col>
                <Col md={4}>
                    <input type="text" className="form-control" placeholder="Phone" />
                </Col>
                <Col md={4}>
                    <input type="text" className="form-control" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    <textarea>Message</textarea>
                    <button type="submit" className="btn-submit">Send</button>
                </Col>
            </Row>
        </Container>
    </section>
)

ContactUs.propTypes = {
  siteTitle: PropTypes.string,
}

ContactUs.defaultProps = {
  siteTitle: ``,
}

export default ContactUs
