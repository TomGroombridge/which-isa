import React from 'react';
import { Heading, FlexCol, FlexRow, Text } from '@zopauk/react-components';
import SButton from '../Button';
import { useHistory } from 'react-router-dom';
import Layout from '../QuestionForm/Layout';
import SeedIcon from '../Icons/SeedIcon';

const LandingPage = ({ setQuestionStep }: any) => {
  let history = useHistory();

  setQuestionStep(1);

  const redirect = () => {
    history.push('/steps');
  };

  return (
    <Layout active={true}>
      <SeedIcon />
      <Heading color={'#FFFFFF'} as={'h3'} style={{ marginTop: '24px' }}>
        Discover the right ISA for you
      </Heading>
      <Text color={'#FFFFFF'}>
        Finding the right ISA can't always be easy so we've got a few short
        questions to help you narrow down the right ISA for you.
      </Text>
      <FlexRow style={{ marginTop: '24px' }}>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={redirect}>
            Get Started
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default LandingPage;
