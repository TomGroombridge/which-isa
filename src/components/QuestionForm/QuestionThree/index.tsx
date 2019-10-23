import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionThree = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 3}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Will you need this money in the next 5 years?
      </Heading>
      <FlexRow>
        <FlexCol xs={10} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(3, 'a')}>
            Yes
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(3, 'b')}>
            No
          </SButton>
        </FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionThree;
