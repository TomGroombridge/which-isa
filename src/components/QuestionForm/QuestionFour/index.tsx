import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionFour = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 4}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        How risky are you feeling?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(4, 'a')}>
            Not very
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(4, 'b')}>
            A little
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(4, 'c')}>
            I enjoy a flutter
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(4, 'd')}>
            Everything on red
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionFour;
