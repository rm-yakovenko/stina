import React, { useReducer } from 'react';
import transportReducer, { initialState } from './reducer';
import { TransportStateContext, TransportDispatchContext } from './Context';

function TransportProvider({ children }) {
  const [state, dispatch] = useReducer(transportReducer, initialState);

  return (
    <TransportStateContext.Provider value={state}>
      <TransportDispatchContext.Provider value={dispatch}>
        {children}
      </TransportDispatchContext.Provider>
    </TransportStateContext.Provider>
  );
}

export default TransportProvider;
