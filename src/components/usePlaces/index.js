import { useContext } from 'react';

import PlacesProvider from './Provider';
import { PlacesDispatchContext, PlacesStateContext } from './Context';
import { getPlaces, addPlace, deletePlace, editPlace } from './actions';

function usePlacesState() {
  const context = useContext(PlacesStateContext);
  if (context === undefined) {
    throw new Error('useNotesState must be used within a NotesProvider');
  }
  return context;
}

function usePlacesDispatch() {
  const context = useContext(PlacesDispatchContext);
  if (context === undefined) {
    throw new Error('useNotesDispatch must be used within a NotesProvider');
  }
  return context;
}

function usePlaces() {
  return [usePlacesState(), usePlacesDispatch()];
}

export default usePlaces;

export {
  PlacesProvider,
  usePlacesState,
  usePlacesDispatch,
  getPlaces,
  addPlace,
  deletePlace,
  editPlace,
};
