/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>,
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  ])
}