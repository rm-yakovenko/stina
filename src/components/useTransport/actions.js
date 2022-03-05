import {
  getCollectionsData,
  addDataToCollection,
  deleteDocument,
  editDocumentInCollection,
} from 'firebase';
import * as actionTypes from './actionTypes';

async function getLocalTransport(dispatch) {
  try {
    const data = await getCollectionsData('transport-local');
    dispatch({ type: actionTypes.SUCCESS_LOCAL, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_LOCAL, error: error.message });
  }
}

async function addLocalTransport(dispatch, body) {
  try {
    const newDoc = await addDataToCollection('transport-local', body);
    dispatch({ type: actionTypes.ADD_LOCAL, data: newDoc });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_LOCAL, error: error.message });
  }
}

async function editLocalTransport(dispatch, body, id) {
  try {
    await editDocumentInCollection('transport-local', id, body);
    const item = { ...body, id };
    dispatch({ type: actionTypes.EDIT_LOCAL, data: item });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_LOCAL, error: error.message });
  }
}

async function deleteLocalTransport(dispatch, id) {
  try {
    await deleteDocument('transport-local', id);
    dispatch({ type: actionTypes.DELETE_LOCAL, data: id });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_LOCAL, error: error.message });
  }
}

async function getHowToGetTransport(dispatch) {
  try {
    const data = await getCollectionsData('transport-howtoget');
    dispatch({ type: actionTypes.SUCCESS_HOWTOGET, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_HOWTOGET, error: error.message });
  }
}

async function addHowToGetTransport(dispatch, body) {
  try {
    const newDoc = await addDataToCollection('transport-howtoget', body);
    dispatch({ type: actionTypes.ADD_HOWTOGET, data: newDoc });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_HOWTOGET, error: error.message });
  }
}

async function editHowToGetTransport(dispatch, body, id) {
  try {
    await editDocumentInCollection('transport-howtoget', id, body);
    const item = { ...body, id };
    dispatch({ type: actionTypes.EDIT_HOWTOGET, data: item });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_HOWTOGET, error: error.message });
  }
}

async function deleteHowToGetTransport(dispatch, id) {
  try {
    await deleteDocument('transport-howtoget', id);
    dispatch({ type: actionTypes.DELETE_HOWTOGET, data: id });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR_HOWTOGET, error: error.message });
  }
}

export {
  getLocalTransport,
  addLocalTransport,
  editLocalTransport,
  deleteLocalTransport,
  getHowToGetTransport,
  addHowToGetTransport,
  deleteHowToGetTransport,
  editHowToGetTransport,
};
