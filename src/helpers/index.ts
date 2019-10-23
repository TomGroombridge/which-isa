// const ISA_TYPES = ['Lifetime', 'StocksAndShares', 'Cash'];

export const generateIsaType = (answers: any) => {
  if (CheckStocksAndSharesIsa(answers)) {
    return 'StocksAndShares';
  } else if (lifeTimeISa(answers)) {
    return 'Lifetime';
  } else {
    return 'Cash';
  }
};

export const lifeTimeISa = (answers: any) => {
  let answer1 = answers[0].answer;
  let answer2 = answers[1].answer;
  let answer3 = answers[2].answer;
  let answer4 = answers[3].answer;
  let answer5 = answers[4].answer;
  let answer6 = answers[5].answer;
  let answer7 = answers[6].answer;

  const a = LifeTimeISA[0].answers.includes(answer1);
  const b = LifeTimeISA[1].answers.includes(answer2);
  const c = LifeTimeISA[2].answers.includes(answer3);
  const d = LifeTimeISA[3].answers.includes(answer4);
  const e = LifeTimeISA[4].answers.includes(answer5);
  const f = LifeTimeISA[5].answers.includes(answer6);
  const g = LifeTimeISA[6].answers.includes(answer7);

  const array = [a, b, c, d, e, f, g];

  return !array.includes(false);
};

export const CheckStocksAndSharesIsa = (answers: any) => {
  let answer1 = answers[0].answer;
  let answer2 = answers[1].answer;
  let answer3 = answers[2].answer;
  let answer4 = answers[3].answer;
  let answer5 = answers[4].answer;
  let answer6 = answers[5].answer;
  let answer7 = answers[6].answer;

  const a = StocksAndSharesIsa[0].answers.includes(answer1);
  const b = StocksAndSharesIsa[1].answers.includes(answer2);
  const c = StocksAndSharesIsa[2].answers.includes(answer3);
  const d = StocksAndSharesIsa[3].answers.includes(answer4);
  const e = StocksAndSharesIsa[4].answers.includes(answer5);
  const f = StocksAndSharesIsa[5].answers.includes(answer6);
  const g = StocksAndSharesIsa[6].answers.includes(answer7);

  const array = [a, b, c, d, e, f, g];

  return !array.includes(false);
};

const LifeTimeISA = [
  { answers: ['b', 'c', 'd'] },
  { answers: ['a', 'b', 'c', 'd', 'e'] },
  { answers: ['a', 'b'] },
  { answers: ['a', 'b', 'c', 'd'] },
  { answers: ['a', 'b'] },
  { answers: ['a', 'b'] },
  { answers: ['a', 'b', 'c', 'd'] }
];

const StocksAndSharesIsa = [
  { answers: ['a', 'b', 'c', 'd', 'e'] },
  { answers: ['b', 'c', 'd', 'e'] },
  { answers: ['b'] },
  { answers: ['b', 'c', 'd'] },
  { answers: ['a', 'b'] },
  { answers: ['a', 'b'] },
  { answers: ['a', 'b'] }
];
