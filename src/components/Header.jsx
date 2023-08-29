import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderContent>
      <Title>Facebook / React</Title>
    </HeaderContent>
  );
};

export default Header;

const HeaderContent = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
`;
