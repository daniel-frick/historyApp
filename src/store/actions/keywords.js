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
    // const keywordsDB = await getDocs(keywordsCollectionRef);
    // const keywordsDBlist = keywordsDB.docs.map(kw => kw.data());
    console.log('received dispatch to ADD kw: ' + kw);

    // dispatch({
    //   type: 'ADD_KEYWORDS_TO_STATE',
    //   newKWdbList,
    // });
  };
};

export const updateKeyword = kw => {
  return async function (dispatch, getState) {
    console.log('received dispatch to UDPATE kw: ' + kw);
  };
};

export const deleteKeyword = kw => {
  return async function (dispatch, getState) {
    console.log('kw to to DELETE kw: ' + kw);
  };
};
