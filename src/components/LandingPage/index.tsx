import React, { useEffect } from 'react';
import { Heading, FlexCol, FlexRow } from '@zopauk/react-components';
import SButton from '../Button';
import { useHistory } from 'react-router-dom';
import Layout from '../QuestionForm/Layout';

const LandingPage = ({ setQuestionStep }: any) => {
  let history = useHistory();

  useEffect(() => {
    setQuestionStep(1);
  }, []);

  const redirect = () => {
    history.push('/steps');
  };

  return (
    <Layout active={true}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Discover the right ISA for you
      </Heading>
      <FlexRow>
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
