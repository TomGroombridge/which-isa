import React from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../../Button';
import Layout from '../Layout';
import { useHistory } from 'react-router-dom';

const QuestionSeven = ({ questionStep, nextStep }: any) => {
  let history = useHistory();
  return (
    <Layout active={questionStep === 7}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        How in control of you finances are you?
      </Heading>
      <FlexRow>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton
            styling='secondary'
            onClick={() => history.push('/confirmation')}
          >
            I'm Superman
          </SButton>
          <SButton
            styling='secondary'
            onClick={() => history.push('/confirmation')}
          >
            I'm pretty good
          </SButton>
          <SButton
            styling='secondary'
            onClick={() => history.push('/confirmation')}
          >
            I'm trying
          </SButton>
          <SButton
            styling='secondary'
            onClick={() => history.push('/confirmation')}
          >
            I have no idea
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default QuestionSeven;
