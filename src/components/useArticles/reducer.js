import * as actionTypes from './actionTypes';

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS: {
      return {
        ...state,
        articles: action.data,
        loading: false,
        error: null,
      };
    }
    case actionTypes.ADD_ARTICLE: {
      return {
        ...state,
        articles: [action.data, ...state.articles],
      };
    }
    case actionTypes.EDIT_ARTICLE: {
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.id === action.data.id) {
            return action.data;
          }
          return article;
        }),
      };
    }
    case actionTypes.DELETE_ARTICLE: {
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.data,
        ),
      };
    }
    case actionTypes.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default articlesReducer;

export { initialState };
