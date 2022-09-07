export const setTextFilter = text => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export const setStartYearFilter = startYearFilter => ({
  type: 'SET_START_YEAR',
  startYearFilter,
});

export const setEndYearFilter = endYearFilter => ({
  type: 'SET_END_YEAR',
  endYearFilter,
});

export const setJubilee = period => ({
  type: 'SET_JUBILEE',
  period,
});

export const setVantageYear = vantageYear => ({
  type: 'SET_VANTAGE_YEAR',
  vantageYear,
});
