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
        <FlexCol xs={10} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={() => nextStep(1, 'a')}>
            Teens
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(1, 'b')}>
            20s
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(1, 'c')}>
            30s
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(1, 'd')}>
            40s
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(1, 'e')}>
            50s
          </SButton>
          <SButton styling='secondary' onClick={() => nextStep(1, 'f')}>
            Older
          </SButton>
        </FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionOne;
