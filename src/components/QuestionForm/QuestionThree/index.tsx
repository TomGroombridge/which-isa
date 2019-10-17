import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionThree = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 3}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Will you need access to your investment quickly?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={nextStep}>
            Yes
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            No
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionThree;
