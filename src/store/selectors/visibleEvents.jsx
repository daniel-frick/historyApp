export default (events, {text, startYearFilter, endYearFilter, jubilee, vantageYear}) => {
  return events.filter(event => {

    const textMatch = event.title.toLowerCase().includes(text.toLowerCase())

    let yearFilter = true;
    if ((startYearFilter && endYearFilter) && (startYearFilter <= endYearFilter)) {
      yearFilter = event.startDate.year >= startYearFilter && event.startDate.year <= endYearFilter
    }
    else if (startYearFilter) {
      yearFilter = event.startDate.year >= startYearFilter
    }
    else if (endYearFilter) {
      yearFilter = event.startDate.year <= endYearFilter
    }

    else if (jubilee > 0)
      yearFilter = vantageYear - event.startDate.year === jubilee
    else {

      return yearFilter
    }

    return textMatch && yearFilter
  }
 ) 
}