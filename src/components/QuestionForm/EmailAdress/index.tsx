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
import EnvelopeIcon from '../../Icons/EnvelopeIcon';

const EmailAdress = ({ questionStep, answers }: any) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const isaType = generateIsaType(answers);
    const url = process.env.REACT_APP_API_URL || '';
    axios(url, {
      method: 'post',
      data: {
        email: email,
        type: isaType
      },
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        setLoading(false);
        history.push('/confirmation');
      })
      .catch((error: any) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <Layout active={questionStep === 8}>
      <EnvelopeIcon />
      <Heading color={'#FFFFFF'} as={'h3'} style={{ marginTop: '24px' }}>
        Please enter your email address to receive your results.
      </Heading>
      <FlexRow>
        <SFlexCol xs={10} m={6} align={'center'} style={{ margin: 'auto' }}>
          <Text color={'#FFFFFF'}>Email</Text>
          <TextField
            inputProps={{ name: 'email', value: email, onChange: handleChange }}
          />
          <SButton
            styling='secondary'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Continue'}
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
    > input {
      background: transparent;
      border: 2px solid #ffffff;
      color: #ffffff;
    }
  }
`;

export default EmailAdress;
