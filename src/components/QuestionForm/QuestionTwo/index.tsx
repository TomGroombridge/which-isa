import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import styled from 'styled-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionTwo = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 2}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        What is your main financial goal?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'a')}>
            Buying a House
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'b')}>
            Planning a Trip
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'c')}>
            Having a Family
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'd')}>
            Other
          </GoalButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

const GoalButton = styled(SButton)`
  min-width: 250px;
  display: block;
  margin: auto;
  margin-bottom: 12px;
`;

export default QuestionTwo;
