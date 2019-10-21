import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionOne from '../../components/QuestionForm/QuestionOne';
import QuestionTwo from '../../components/QuestionForm/QuestionTwo';
import QuestionThree from '../../components/QuestionForm/QuestionThree';
import QuestionFour from '../../components/QuestionForm/QuestionFour';
import QuestionFive from '../../components/QuestionForm/QuestionFive';
import QuestionSix from '../../components/QuestionForm/QuestionSix';
import QuestionSeven from '../../components/QuestionForm/QuestionSeven';
import EmailAdress from '../../components/QuestionForm/EmailAdress';

const QuestionForm = ({ nextStep, questionStep }: any) => {
  const initialAnswers = [
    { question: '1', answer: '' },
    { question: '2', answer: '' },
    { question: '3', answer: '' },
    { question: '4', answer: '' },
    { question: '5', answer: '' },
    { question: '6', answer: '' },
    { question: '7', answer: '' }
  ];
  const [answers, setAnswers] = useState(initialAnswers);

  const handleAnswerUpdate = (question: number, answer: string) => {
    answers[question - 1].answer = answer;
    setAnswers(answers);
    nextStep();
  };

  return (
    <FormLayout>
      <QuestionOne questionStep={questionStep} nextStep={handleAnswerUpdate} />
      <QuestionTwo questionStep={questionStep} nextStep={handleAnswerUpdate} />
      <QuestionThree
        questionStep={questionStep}
        nextStep={handleAnswerUpdate}
      />
      <QuestionFour questionStep={questionStep} nextStep={handleAnswerUpdate} />
      <QuestionFive questionStep={questionStep} nextStep={handleAnswerUpdate} />
      <QuestionSix questionStep={questionStep} nextStep={handleAnswerUpdate} />
      <QuestionSeven
        questionStep={questionStep}
        nextStep={handleAnswerUpdate}
      />
      <EmailAdress questionStep={questionStep} answers={answers} />
    </FormLayout>
  );
};

const FormLayout = styled.div`
  position: relative;
  top: 30vh;
  @media screen and (max-width: 768px) {
    top: 10vh;
  }
`;

export default QuestionForm;
