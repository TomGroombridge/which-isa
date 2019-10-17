import React from 'react';
import Layout from '../QuestionForm/Layout';
import { Heading, FlexRow, FlexCol, Text } from '@zopauk/react-components';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import EarlyBirdIcon from '../Icons/EarlyBirdIcon';
import SButton from '../Button';

const Confirmation = () => {
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
          <SButton styling='secondary'>Copy Link</SButton>
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
