import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

const headerBase = css`
  display: flex;
  align-items: center;
  background: #1d8;
  color: #fff;
  padding: 0 5px;
`;

const headerBrandBase = css`
  flex: 1 1 auto;
  padding: 10px;
  text-align: center;
`;

const HeaderWrap = styled.header`
  ${headerBase}
`;

const HeaderBrand = styled.h1`
  ${headerBrandBase}
`;

const Header = () => (
  <HeaderWrap>
    <div>#</div>
    <HeaderBrand>Creditas</HeaderBrand>
    <div>©</div>
  </HeaderWrap>
);

export {Header};
