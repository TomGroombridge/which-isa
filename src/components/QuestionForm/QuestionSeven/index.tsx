import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionSeven = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 7}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        How in control of your finances are you?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(7, 'a')}>
            I'm Superman
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(7, 'b')}>
            I'm pretty good
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(7, 'c')}>
            I'm trying
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(7, 'd')}>
            I have no idea
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionSeven;
