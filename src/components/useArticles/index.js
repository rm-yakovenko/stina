import { useContext } from 'react';

import ArticlesProvider from './Provider';
import { ArticlesStateContext, ArticlesDispatchContext } from './Context';
import { addArticle, getArticles, editArticle, deleteArticle } from './actions';

function useAriclesState() {
  const context = useContext(ArticlesStateContext);
  if (context === undefined) {
    throw new Error('useAriclesState must be used within a AriclesProvider');
  }
  return context;
}

function useArticlesDispatch() {
  const context = useContext(ArticlesDispatchContext);
  if (context === undefined) {
    throw new Error('useAriclesDispatch must be used within a AriclesProvider');
  }
  return context;
}

function useArticles() {
  return [useAriclesState(), useArticlesDispatch()];
}

export default useArticles;

export {
  ArticlesProvider,
  useAriclesState,
  useArticlesDispatch,
  addArticle,
  getArticles,
  editArticle,
  deleteArticle,
};
