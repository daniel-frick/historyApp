export const compareWithGeneralKeywordState = (newKW, kwStorage) => {
  const index = kwStorage.findIndex(oldEntry => oldEntry.keyword == newKW);

  if (index > -1) {
    return kwStorage[index];
  } else {
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
