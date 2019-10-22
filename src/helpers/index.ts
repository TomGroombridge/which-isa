const ISA_TYPES = ['Lifetime', 'StocksAndShares', 'Cash'];

export const generateIsaType = (answers: any) => {
  let isaType = ISA_TYPES;

  if ((answers[1].answer === 'e', answers[1].answer === 'f')) {
    const index = isaType.indexOf('Lifetime');
    if (index !== -1) isaType.splice(index, 1);
  }
  if (answers[3].answer === 'a') {
    const indexOne = isaType.indexOf('Lifetime');
    if (indexOne !== -1) isaType.splice(indexOne, 1);
    const indexTwo = isaType.indexOf('StocksAndShares');
    if (indexTwo !== -1) isaType.splice(indexTwo, 1);
  }
  if (answers[4].answer === 'a') {
    const index = isaType.indexOf('StocksAndShares');
    if (index !== -1) isaType.splice(index, 1);
  }

  return isaType[0];
};
