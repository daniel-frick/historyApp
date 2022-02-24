export default (events, {text, startYearFilter, endYearFilter}) => {
  return events.filter(event => {
    const textMatch = event.title.toLowerCase().includes(text.toLowerCase())
    let yearFilter = true;
    if (startYearFilter && endYearFilter) {
      yearFilter = event.startDate.year >= startYearFilter && event.startDate.year <= endYearFilter
      console.log('with end date')
    }
    else if (startYearFilter) {
      yearFilter = event.startDate.year === startYearFilter
      console.log('only start date')
    }
    else {
      return yearFilter
    }
    
    return textMatch && yearFilter
  })
}