export default (
  events,
  { text, startYearFilter, endYearFilter, jubilee, vantageYear }
) => {
  return events.filter(event => {
    let textMatch = event.title.toLowerCase().includes(text.toLowerCase());
    console.log(textMatch);
    let yearFilter = true;

    if (startYearFilter && endYearFilter && startYearFilter <= endYearFilter) {
      yearFilter =
        event.startDate.year >= startYearFilter &&
        event.startDate.year <= endYearFilter;
    } else if (startYearFilter && !endYearFilter) {
      yearFilter = event.startDate.year >= startYearFilter;
    } else if (endYearFilter && !startYearFilter) {
      console.log('only endyear filter');
      yearFilter = event.startDate.year <= endYearFilter;
    } else if (jubilee > 0)
      yearFilter = vantageYear - event.startDate.year === jubilee;
    else {
      return yearFilter && textMatch;
    }
    return yearFilter && textMatch;
  });
};
