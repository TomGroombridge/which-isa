import React, { useState } from 'react';
import Layout from '../Layout';
import {
  Heading,
  FlexRow,
  FlexCol,
  TextField,
  Text
} from '@zopauk/react-components';
import SButton from '../../Button';
import { generateIsaType } from '../../../helpers';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const EmailAdress = ({ questionStep, answers }: any) => {
  let history = useHistory();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const isaType = generateIsaType(answers);
    console.log('isaType', isaType);
    axios('http://localhost:3001/sendEmail', {
      method: 'post',
      data: {
        email: email
      },
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        history.push('/confirmation');
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <Layout active={questionStep === 8}>
      <Heading color={'#FFFFFF'} as={'h3'}>
        Please enter your email address to receive your results.
      </Heading>
      <FlexRow>
        <SFlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <Text color={'#FFFFFF'}>Email</Text>
          <TextField
            inputProps={{ name: 'email', value: email, onChange: handleChange }}
          />
          <SButton styling='secondary' onClick={handleSubmit}>
            Continue
          </SButton>
        </SFlexCol>
      </FlexRow>
    </Layout>
  );
};

const SFlexCol = styled(FlexCol)`
  > div {
    margin: auto;
    margin-bottom: 24px;
  }
`;

export default EmailAdress;
