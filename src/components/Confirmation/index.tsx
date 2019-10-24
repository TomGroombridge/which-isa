import React, { useState, useEffect } from 'react';
import Layout from '../QuestionForm/Layout';
import { Heading, FlexRow, FlexCol, Text } from '@zopauk/react-components';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import EarlyBirdIcon from '../Icons/EarlyBirdIcon';
import SButton from '../Button';
import copy from 'copy-to-clipboard';
import ReactGA from 'react-ga';

const Confirmation = () => {
  useEffect(() => {
    ReactGA.pageview('/Confirmation');
  }, []);
  const [buttonText, setButtonText] = useState('Copy Link');

  const handleClick = () => {
    setButtonText('Copied...');
    copy('https://which-isa.herokuapp.com');
  };
  return (
    <Layout active={true}>
      <EarlyBirdIcon />
      <Heading color={'#FFFFFF'} as={'h3'} style={{ marginTop: '24px' }}>
        Thank You!
      </Heading>
      <Heading color={'#FFFFFF'} as={'h4'} style={{ marginTop: '24px' }}>
        We'll ping you an email with the results!
      </Heading>

      <FlexRow style={{ marginTop: '24px' }}>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol xs={12} m={6} align={'center'} style={{ margin: 'auto' }}>
          <SButton styling='secondary' onClick={handleClick}>
            {buttonText}
          </SButton>
        </FlexCol>
        <FlexCol xs={0} m={3}></FlexCol>
        <FlexCol>
          <ArrowUpIcon />
        </FlexCol>
        <FlexCol>
          <Text color={'#FFFFFF'} style={{ marginTop: '24px' }}>
            If you think it might be useful to others please share this link
            with them.
          </Text>
        </FlexCol>
      </FlexRow>
    </Layout>
  );
};

export default Confirmation;
