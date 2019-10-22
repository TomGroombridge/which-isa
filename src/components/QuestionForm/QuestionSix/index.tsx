import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionSix = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 6}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Do you have kids?
      </Heading>
      <FlexRow>
        <FlexCol xs={10} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(6, 'a')}>
            Yes
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(6, 'b')}>
            No
          </SButton>
        </FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionSix;
