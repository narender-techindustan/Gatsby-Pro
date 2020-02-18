import PropTypes from "prop-types"
import React from "react"
import Infographic from "../images/infographic.png"
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";

const TrialCircle = ({ siteTitle }) => (
    <section className="trial-circle">
        <Grid>
            <Row>
                <Col sm={12} className="infographic">
                    <img src={Infographic} alt="" />
                </Col>
            </Row>
        </Grid>
    </section>
)

TrialCircle.propTypes = {
  siteTitle: PropTypes.string,
}

TrialCircle.defaultProps = {
  siteTitle: ``,
}

export default TrialCircle
