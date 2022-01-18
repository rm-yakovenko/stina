import {
  getCollectionsData,
  addDataToCollection,
  editDocumentInCollection,
  deleteDocument,
} from 'firebase';
import * as actionTypes from './actionTypes';

async function getArticles(dispatch) {
  try {
    const data = await getCollectionsData('articles');
    dispatch({ type: actionTypes.SUCCESS, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function addArticle(dispatch, body) {
  try {
    const newDoc = await addDataToCollection('articles', body);
    dispatch({ type: actionTypes.ADD_ARTICLE, data: newDoc });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function editArticle(dispatch, body, id) {
  try {
    await editDocumentInCollection('articles', id, body);
    dispatch({ type: actionTypes.EDIT_ARTICLE, data: body });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function deleteArticle(dispatch, id) {
  try {
    await deleteDocument('articles', id);
    dispatch({ type: actionTypes.DELETE_ARTICLE, data: id });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

export { addArticle, getArticles, editArticle, deleteArticle };
