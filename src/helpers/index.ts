export const generateIsaType = (answers: any) => {
  let array = [];
  array.push(questionOne(answers[0]));
  return array;
  // answers.forEach((answer: any) => {});
};

// const ISA_TYPES = [
//   'Stocks & Shares',
//   'Cash',
//   'Innovative',
//   'Lifetime',
//   'Junior'
// ];

const questionOne = (question: any) => {
  let isa = '';
  switch (question.answer) {
    case 'a':
      isa = 'Help to Buy';
      break;
    case 'b':
      isa = 'Help to Buy';
      break;
    case 'c':
      isa = 'Help to Buy';
      break;
    case 'd':
      isa = 'Help to Buy';
      break;
    case 'e':
      isa = 'Help to Buy';
      break;
    case 'f':
      isa = 'Help to Buy';
  }
  return isa;
};
