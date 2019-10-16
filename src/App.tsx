import React, { useState } from 'react';
import './App.css';
import { GlobalStyles, Fonts, Heading, colors } from '@zopauk/react-components';
import styled from 'styled-components';
import QuestionOne from './components/questions/QuestionOne';
import QuestionTwo from './components/questions/QuestionTwo';
import QuestionThree from './components/questions/QuestionThree';
import Confirmation from './components/Confirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <SHeading as={'h2'}>PASTUSO</SHeading>
      <Router>
        <Switch>
          <Route exact path='/'>
            <FormLayout>
              <QuestionOne questionStep={questionStep} nextStep={nextStep} />
              <QuestionTwo questionStep={questionStep} nextStep={nextStep} />
              <QuestionThree questionStep={questionStep} />
            </FormLayout>
          </Route>
          <Route exact path='/confirmation'>
            <FormLayout>
              <Confirmation />
            </FormLayout>
          </Route>
        </Switch>
      </Router>
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

const SHeading = styled(Heading)`
  text-align: left;
  left: 10px;
  top: 10px;
  position: relative;
  margin-top: 0px;
  color: ${colors.neutral.white};
`;

export default App;
