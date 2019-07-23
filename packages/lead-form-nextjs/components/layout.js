import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from './header';
import Step from './step';

const Main = styled.main`
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
`;

const Layout = ({children}) => (
  <>
    <Header siteTitle="Creditas" />
    <Step selected="1" />
    <div>
      <Main>{children}</Main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
