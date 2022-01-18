import React, { useReducer } from 'react';
import articlesReducer, { initialState } from './reducer';
import { ArticlesStateContext, ArticlesDispatchContext } from './Context';

function ArticlesProvider({ children }) {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
}

export default ArticlesProvider;
