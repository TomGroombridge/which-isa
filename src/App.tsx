import React, { useState } from 'react';
import './App.css';
import { GlobalStyles, Fonts } from '@zopauk/react-components';
import styled from 'styled-components';
import QuestionOne from './components/questions/QuestionOne';
import QuestionTwo from './components/questions/QuestionTwo';
import QuestionThree from './components/questions/QuestionThree';

const App = () => {
  const [questionStep, setQuestionStep] = useState(1);

  const nextStep = () => {
    const stepCount = questionStep + 1;
    setQuestionStep(stepCount);
  };

  return (
    <div className='App'>
      <GlobalStyles />
      <Fonts />
      <FormLayout>
        <QuestionOne questionStep={questionStep} nextStep={nextStep} />
        <QuestionTwo questionStep={questionStep} nextStep={nextStep} />
        <QuestionThree questionStep={questionStep} nextStep={nextStep} />
      </FormLayout>
    </div>
  );
};

const FormLayout = styled.div`
  position: relative;
  top: 30vh;
  @media screen and (max-width: 768px) {
    top: 10vh;
  }
`;

export default App;
