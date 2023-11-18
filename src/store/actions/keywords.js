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

const keywordsCollectionRef = collection(db, 'keywords');

export const fetchKeywords = () => {
  return async function (dispatch, getState) {
    const keywordsDB = await getDocs(keywordsCollectionRef);
    const keywordsList = keywordsDB.docs.map(kw => ({
      id: kw.id,
      ...kw.data(),
    }));
    dispatch({ type: 'FETCH_KEYWORDS', keywordsList });
  };
};

export const addKeyword = kw => {
  return async function (dispatch, getState) {
    const kwData = { keyword: kw, count: 1 };
    const docRef = await addDoc(keywordsCollectionRef, kwData);

    dispatch({
      type: 'ADD_KEYWORD',
      kwData: {
        id: docRef.id,
        ...kwData,
      },
    });
  };
};

export const updateKeyword = (id, updates) => {
  return async function (dispatch, getState) {
    const keywordToUpdate = doc(db, 'keywords', id);
    await updateDoc(keywordToUpdate, updates);

    dispatch({ type: 'UPDATE_KEYWORD', id, updates });
  };
};

export const deleteKeyword = kw => {
  return async function (dispatch, getState) {
    console.log('kw to to DELETE kw: ' + kw);
  };
};
