import { DateTime } from 'luxon';
import { db } from '../../firebase/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
const eventsCollectionRef = collection(db, 'events');

export const fetchData = () => {
  return async function (dispatch, getState) {
    const data = await getDocs(eventsCollectionRef);
    const dataList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    dataList.forEach(event => {
      const startDateArray = event.startDate.split('/').map(e => +e);
      event.startDate = DateTime.local(...startDateArray);
      const endDateArray = event.endDate
        ? event.endDate.split('/').map(e => +e)
        : startDateArray;
      event.endDate = DateTime.local(...endDateArray);
    });
    dispatch({ type: 'FETCH_DATA', dataList });
  };
};

export const addEvent = ({
  title = '',
  body = '',
  keywords = '',
  startDate = '',
  endDate = '',
  withStartDay = true,
  withStartMonth = true,
  withEndDay = true,
  withEndMonth = true,
} = {}) => {
  return async function (dispatch, getState) {
    const eventData = {
      startDate,
      endDate,
      title,
      body,
      keywords,
      withStartMonth,
      withStartDay,
      withEndMonth,
      withEndDay,
      added: new Date(),
    };
    const docRef = await addDoc(eventsCollectionRef, eventData);
    const startDateArray = eventData.startDate.split('/').map(e => +e);
    eventData.startDate = DateTime.local(...startDateArray);
    const endDateArray = eventData.endDate
      ? eventData.endDate.split('/').map(e => +e)
      : startDateArray;
    eventData.endDate = DateTime.local(...endDateArray);
    dispatch({
      type: 'ADD_EVENT',
      eventData: {
        id: docRef.id,
        ...eventData,
      },
    });
  };
};

export const editEvent = (id, updates) => {
  return async function (dispatch, getState) {
    const itemToDelete = doc(db, 'events', id);
    await updateDoc(itemToDelete, updates);
    const startDateArray = updates.startDate.split('/').map(e => +e);
    updates.startDate = DateTime.local(...startDateArray);
    const endDateArray = updates.endDate
      ? updates.endDate.split('/').map(e => +e)
      : startDateArray;
    updates.endDate = DateTime.local(...endDateArray);
    dispatch({
      type: 'EDIT_EVENT',
      id,
      updates,
    });
  };
};

export const deleteEvent = id => {
  return async function (dispatch, getState) {
    const itemToDelete = doc(db, 'events', id);
    await deleteDoc(itemToDelete);
    dispatch({
      type: 'DELETE_EVENT',
      id,
    });
  };
};
