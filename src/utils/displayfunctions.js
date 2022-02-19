export const getSingleStartDate = (props) => {
   let dateString = props.startDate.year.toString()

    if (props.withStartMonth) {
      dateString += '/' + props.startDate.month.toString().padStart(2,'0')
    }
    if (props.withStartDay) {
      dateString += '/' + props.startDate.day.toString().padStart(2,'0')
    }
    return dateString
}

export const getSingleEndDate = (props) => {
  let dateString = props.endDate.year.toString()

  if (props.withEndMonth) {
    dateString += '/' + props.endDate.month.toString().padStart(2,'0')
  }
  
  if (props.withEndDay) {
    dateString += '/' + props.endDate.day.toString().padStart(2,'0')
  }
  return dateString
}



export const getFullDateString = (props) => {
    let fullDateString = getSingleStartDate(props)
   
    if (!props.startDate.hasSame(props.endDate, "day")) {
      fullDateString += String.fromCharCode(0x2013)
    }
    if (!props.startDate.hasSame(props.endDate, "year")) {
      fullDateString += props.endDate.year.toString() + '/'
    }
    if (!props.startDate.hasSame(props.endDate, "month")) {
      fullDateString += props.endDate.month.toString().padStart(2,'0') + '/'
    }
    if (!props.startDate.hasSame(props.endDate, "day")) {
      fullDateString += props.endDate.day.toString().padStart(2,'0')
    }
    return fullDateString
  }