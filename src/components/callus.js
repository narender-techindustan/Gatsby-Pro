import PropTypes from "prop-types"
import React from "react"
import Call from "../images/call.png"
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const CallForUs = ({ siteTitle }) => (
    <section className="call-for-us">
        <Container>
            <Row>
                <Col md={7}>
                    <h3>Call us for a quote or a free 30days trial</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. </p>
                </Col>
                <Col md={5} className="text-right tel-phone">
                    <a href="" className="telphone">
                        <img src={Call} alt="cell" /> 1300 218 155
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
)

CallForUs.propTypes = {
  siteTitle: PropTypes.string,
}

CallForUs.defaultProps = {
  siteTitle: ``,
}

export default CallForUs
