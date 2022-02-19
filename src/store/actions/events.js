import { v4 as uuidv4 } from 'uuid';

export const deleteEvent = (id) => ({
  type: 'DELETE_EVENT',
  id
})

export const addEvent = (
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
  type: 'ADD_EVENT',
  event: {
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

export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
})