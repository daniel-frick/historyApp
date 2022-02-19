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
    withStartDay = true,
    withStartMonth = true,
    withEndDay = true,
    withEndMonth = true
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
    withStartMonth,
    withStartDay,
    withEndMonth,
    withEndDay,
    added: new Date()
  }
}
)

export const editDate = (id, updates) => ({
  type: 'EDIT_DATE',
  id,
  updates
})