import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const VideoSec = ({ siteTitle }) => (
    <section className="video-sec">
        <div className="home-video">
            <div className="client-video">
                <div className="home-video-title">
                    <button type="button" className="btn btn-primary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/IP7uGKgJL8U"
                        data-target="#myModal">
                        <img src="images/play.png" />
                    </button>
                </div>
                <div className="modal fade cus-video-pop" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" tabindex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NCKwXNB18jQ" frameborder="0" allow="autoplay; encrypted-media"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

VideoSec.propTypes = {
  siteTitle: PropTypes.string,
}

VideoSec.defaultProps = {
  siteTitle: ``,
}

export default VideoSec
