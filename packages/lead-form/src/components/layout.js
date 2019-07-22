import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Font from "../fonts/lucida-grande.woff" 
import styled from '@emotion/styled'
import Step from "../components/step"

const Main = styled.main`
@font-face {
  font-family: 'Lucida Grande';
  src: url('${Font}') format("woff");
}

margin: 0;
height: 100vh;
font-family: 'Lucida Grande';
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
background-image: linear-gradient(
  to bottom, 
  #fff 0%, 
  #fff 50%, 
  #37b 50%, 
  #37b 100%
);
background-size: cover;
background-repeat: no-repeat;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <Step selected="1"/>
        <div>
          <Main>{children}</Main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
