import PropTypes from 'prop-types';
import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import CreditasLogo from '../images/creditas-logo.png';

// Text
const baseText = css`
  margin: 0 auto;
`;
const Text = styled.h1`
  ${baseText}
`;

// HEADER
const baseHeader = css`
  margin-bottom: 1.45rem;
  height: 2.75em;

  img {
    height: 0.8em;
  }
`;

const Header = styled.header`
  ${baseHeader}
`;

// ---------------------------------
const HeaderRaw = ({siteTitle}) => (
  <Header>
    <Text>
      <img src={CreditasLogo} alt="Creditas Logo" />
    </Text>
  </Header>
);

HeaderRaw.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderRaw.defaultProps = {
  siteTitle: ``,
};

export default HeaderRaw;
