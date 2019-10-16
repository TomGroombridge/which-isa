import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';

const QuestionOne = ({ questionStep, nextStep }: any) => {
  return (
    <Layout active={questionStep === 1}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        How old are you?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={nextStep}>
            Teens
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            20s
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            30s
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            40s
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            50s
          </SButton>
          <SButton styling='secondary' onClick={nextStep}>
            Older
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionOne;
