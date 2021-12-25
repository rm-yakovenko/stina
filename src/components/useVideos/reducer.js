import * as actionTypes from './actionTypes';

const initialState = {
  videos: [],
  loading: true,
  error: null,
};

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS: {
      return {
        ...state,
        videos: action.data,
        loading: false,
        error: null,
      };
    }
    case actionTypes.ADD_VIDEO: {
      return {
        ...state,
        videos: [action.data, ...state.videos],
      };
    }
    case actionTypes.DELETE_VIDEO: {
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.data),
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

export default videosReducer;

export { initialState };
