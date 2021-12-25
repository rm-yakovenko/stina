import {
  getDataWithSubCollection,
  addDataToSubCollection,
  deleteDocumentFromSubCollection,
  editDocumentInSubCollection,
} from 'firebase';
import * as actionTypes from './actionTypes';

async function getPlaces(dispatch) {
  try {
    const data = await getDataWithSubCollection('places', 'places');
    dispatch({ type: actionTypes.SUCCESS, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function addPlace(dispatch, route, place) {
  try {
    const data = await addDataToSubCollection(route, place);
    dispatch({ type: actionTypes.ADD_PLACE, data });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function deletePlace(dispatch, route, place) {
  try {
    await deleteDocumentFromSubCollection(route, place.id);
    dispatch({ type: actionTypes.DELETE_PLACE, data: place });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

async function editPlace(dispatch, route, place) {
  try {
    await editDocumentInSubCollection(route, place.id, place);
    dispatch({ type: actionTypes.EDIT_PLACE, data: place });
  } catch (error) {
    dispatch({ type: actionTypes.ERROR, error: error.message });
  }
}

export { getPlaces, addPlace, deletePlace, editPlace };
