import PropTypes from "prop-types"
import React from "react"
import HeaderImg from "../images/header-image.png"
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

const Banner = ({ siteTitle }) => (
    <section className="banner">
        <Container>
            <Row className="banner1">
                <Col md={6} className="work-your-plan">
                    <h1>Work your way </h1>
                    <h2>No more I.T constraints</h2>
                    <p>All your normal programs , all your normal files, all backed up & secure. But none of your normal. headaches</p>
                    <p>And no crazy price tag.</p>
                </Col>
                <Col md={6} className="image-right-banner">
                    <img src={HeaderImg} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
