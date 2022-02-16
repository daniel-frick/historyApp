import { v4 as uuidv4 } from 'uuid';
export const deleteDate = (id) => ({
  type: 'DELETE_DATE',
  id
})

export const addDate = (
  {
    title = '',
    body = '',
    startDate = '',
    endDate = '',
    footnotes = '',
  } = {}
) => ({
  type: 'ADD_DATE',
  date: {
    id: uuidv4(),
    startDate,
    endDate,
    title,
    body,
    footnotes,
    added: new Date()
  }
}
)