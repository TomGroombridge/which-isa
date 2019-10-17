import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionFive = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 5}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Do you own a property already?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(5, 'a')}>
            Yes
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(5, 'b')}>
            No
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionFive;
