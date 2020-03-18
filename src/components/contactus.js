import PropTypes from "prop-types"
import React from "react"
import {
    Container,
    Row,
    Col
  } from "react-bootstrap";

// const ContactUs = ({ siteTitle }) => (
export class ContactUs extends React.Component {
    state = {
        name: "",
        phone: "",
        email: "",
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.name} ${this.state.phone} ${this.state.email}!`)
    }
    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <div className="heading text-center">
                            <h2>Contact us</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col md={4}>
                                        <input 
                                            className="form-control"
                                            type="text" 
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email" 
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}    
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="text-center">
                                        <textarea>Message</textarea>
                                        <button
                                            className="btn-submit"
                                            type="submit"
                                        >
                                            Send
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
// )
}

ContactUs.propTypes = {
  siteTitle: PropTypes.string,
}

ContactUs.defaultProps = {
  siteTitle: ``,
}

export default ContactUs
