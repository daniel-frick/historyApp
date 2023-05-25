export const keywordInState = (newKW, kwStorage) => {
  console.log('gotcha');
  const index = kwStorage.findIndex(oldEntry => oldEntry.keyword == newKW);

  if (index > -1) {
    console.log('KW found, increasing number');
    return true;
  } else {
    console.log('new KW, adding to list');
    return false;
  }
};

export const compareKeywords = (initialKW, newKW) => {
  let kwComparison = { toAdd: [], toDelete: [] };

  initialKW.map(kw => {
    if (!newKW.includes(kw)) {
      kwComparison.toDelete.push(kw);
    }
  });

  newKW.map(kw => {
    if (!initialKW.includes(kw)) {
      kwComparison.toAdd.push(kw);
    }
  });

  return kwComparison;
};
