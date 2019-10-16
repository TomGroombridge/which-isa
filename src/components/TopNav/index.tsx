import React from 'react';
import styled from 'styled-components';
import { Heading, colors } from '@zopauk/react-components';
import { useHistory } from 'react-router-dom';

const TopNav = () => {
  let history = useHistory();

  return (
    <SHeading as={'h2'} onClick={() => history.push('/')}>
      PASTUSO
    </SHeading>
  );
};

const SHeading = styled(Heading)`
  text-align: left;
  left: 10px;
  top: 10px;
  position: relative;
  margin-top: 0px;
  color: ${colors.neutral.white};
`;

export default TopNav;
