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
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (handleValidation()) {
      setError(false);
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
        });
    } else {
      setError(true);
    }
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleValidation = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tslint:disable
    return regex.test(email);
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
            inputProps={{
              name: 'email',
              value: email,
              onChange: handleChange,
              onBlur: handleValidation
            }}
          />
          {error && (
            <Text as='p' color='#EE0505' style={{ marginBottom: '24px' }}>
              Email address is not valid
            </Text>
          )}
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
