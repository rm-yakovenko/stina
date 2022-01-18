import {
  getCollectionsData,
  addDataToCollection,
  deleteDocument,
} from 'firebase';
import * as actionTypes from './actionTypes';

async function getVideos(dispatch) {
  try {
    const data = await getCollectionsData('videos');
    dispatch({ type: actionTypes.SUCCESS, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function addVideo(dispatch, body) {
  try {
    const newDoc = await addDataToCollection('videos', body);
    dispatch({ type: actionTypes.ADD_VIDEO, data: newDoc });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function deleteVideo(dispatch, id) {
  try {
    await deleteDocument('videos', id);
    dispatch({ type: actionTypes.DELETE_VIDEO, data: id });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

export { getVideos, addVideo, deleteVideo };
