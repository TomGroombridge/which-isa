import React from 'react';
import Layout from '../QuestionForm/Layout';
import { Heading } from '@zopauk/react-components';

const Confirmation = () => {
  return (
    <Layout active={true}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Thank You!
      </Heading>
    </Layout>
  );
};

export default Confirmation;
