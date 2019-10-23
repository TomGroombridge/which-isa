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
        <FlexCol xs={10} m={6} align={'center'} style={{ margin: 'auto' }}>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'a')}>
            Buying my first house
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'b')}>
            Saving for retirement
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'c')}>
            Planning a trip
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'd')}>
            Having a family
          </GoalButton>
          <GoalButton styling='secondary' onClick={() => nextStep(2, 'e')}>
            Other
          </GoalButton>
        </FlexCol>
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
