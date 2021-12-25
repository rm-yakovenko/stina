import React, { useReducer } from 'react';
import videosReducer, { initialState } from './reducer';
import { VideosStateContext, VideosDispatchContext } from './Context';

function VideosProvider({ children }) {
  const [state, dispatch] = useReducer(videosReducer, initialState);

  return (
    <VideosStateContext.Provider value={state}>
      <VideosDispatchContext.Provider value={dispatch}>
        {children}
      </VideosDispatchContext.Provider>
    </VideosStateContext.Provider>
  );
}

export default VideosProvider;
