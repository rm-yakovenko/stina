import React, { useReducer } from 'react';
import placesReducer, { initialState } from './reducer';
import { PlacesStateContext, PlacesDispatchContext } from './Context';

function PlacesProvider({ children }) {
  const [state, dispatch] = useReducer(placesReducer, initialState);

  return (
    <PlacesStateContext.Provider value={state}>
      <PlacesDispatchContext.Provider value={dispatch}>
        {children}
      </PlacesDispatchContext.Provider>
    </PlacesStateContext.Provider>
  );
}

export default PlacesProvider;
