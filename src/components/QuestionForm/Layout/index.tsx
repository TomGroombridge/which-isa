import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@zopauk/react-components';

const Layout = ({ children, active }: any) => {
  return (
    <SFlexContainer active={active}>
      <Container>{children}</Container>
    </SFlexContainer>
  );
};

const SFlexContainer = styled<any>(FlexContainer)`
  background-color: #282c34;
  min-height: 100vh;
  display: ${props => (props.active ? 'block' : 'none')};
`;

const Container = styled.div`
  position: absolute;
  right: -1000px;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: slide 0.5s forwards;
  animation-delay: 0s;
  width: 100%;

  @-webkit-keyframes slide {
    100% {
      right: 0;
    }
  }

  @keyframes slide {
    100% {
      right: 0;
    }
  }
`;

export default Layout;
