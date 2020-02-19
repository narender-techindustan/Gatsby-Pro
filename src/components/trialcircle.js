import PropTypes from "prop-types"
import React from "react"
import Infographic from "../images/infographic.png"
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const TrialCircle = ({ siteTitle }) => (
    <section className="trial-circle">
        <Container>
            <Row>
                <Col md={12} className="infographic">
                    <img src={Infographic} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
)

TrialCircle.propTypes = {
  siteTitle: PropTypes.string,
}

TrialCircle.defaultProps = {
  siteTitle: ``,
}

export default TrialCircle
