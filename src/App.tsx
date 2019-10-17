import React, { useState } from 'react';
import './App.css';
import { GlobalStyles, Fonts } from '@zopauk/react-components';
import styled from 'styled-components';
import QuestionOne from './components/QuestionForm/QuestionOne';
import QuestionTwo from './components/QuestionForm/QuestionTwo';
import QuestionThree from './components/QuestionForm/QuestionThree';
import QuestionFour from './components/QuestionForm/QuestionFour';
import QuestionFive from './components/QuestionForm/QuestionFive';
import QuestionSix from './components/QuestionForm/QuestionSix';
import QuestionSeven from './components/QuestionForm/QuestionSeven';
import Confirmation from './components/Confirmation';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';
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
      <Router>
        <TopNav />
        <Switch>
          <Route exact path='/'>
            <FormLayout>
              <LandingPage setQuestionStep={setQuestionStep} />
            </FormLayout>
          </Route>

          <Route exact path='/steps'>
            <FormLayout>
              <QuestionOne questionStep={questionStep} nextStep={nextStep} />
              <QuestionTwo questionStep={questionStep} nextStep={nextStep} />
              <QuestionThree questionStep={questionStep} nextStep={nextStep} />
              <QuestionFour questionStep={questionStep} nextStep={nextStep} />
              <QuestionFive questionStep={questionStep} nextStep={nextStep} />
              <QuestionSix questionStep={questionStep} nextStep={nextStep} />
              <QuestionSeven questionStep={questionStep} nextStep={nextStep} />
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

export default App;
