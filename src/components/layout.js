/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Banner from "./banner";
import TrialCircle from "./trialcircle";
import VideoSec from "./video";
import CallForUs from "./callus";
import FacebookSec from "./facebooksec";
import ContactUs from "./contactus";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header/>
        <Banner />
        <TrialCircle />
        <VideoSec />
        <CallForUs />
        <FacebookSec />
        <ContactUs />
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
