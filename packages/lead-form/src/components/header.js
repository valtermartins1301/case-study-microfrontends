import { Link as LinkRaw } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import CreditasLogo from '../images/creditas-logo.png'

// Text
const baseText = css`
  margin: 0 auto;
`
const Text = styled.h1`
  ${baseText}
`

// Link
const baseLink = css`
  text-decoration: none;
  color: black;
`
const Link = styled(LinkRaw)`
  ${baseLink}
`

// HEADER
const baseHeader = css`
  margin-bottom: 1.45rem;
  height: 2.75em;

  img {
    height: 0.8em;
  }
`

const Header = styled.header`
  ${baseHeader}
`


// ---------------------------------
const HeaderRaw = ({ siteTitle }) => (
  <Header>
    <Text>
      <Link to="/">
        <img src={CreditasLogo} alt="Creditas Logo"/>
      </Link>
    </Text>
  </Header>
)

HeaderRaw.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderRaw.defaultProps = {
  siteTitle: ``,
}

export default HeaderRaw
