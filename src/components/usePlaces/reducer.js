import * as actionTypes from './actionTypes';

const initialState = {
  places: [],
  loading: true,
  error: null,
};

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS: {
      return {
        ...state,
        places: action.data,
        loading: false,
        error: null,
      };
    }
    case actionTypes.ADD_PLACE: {
      return {
        ...state,
        places: state.places.map((item) => {
          if (item.id === action.data.category) {
            return {
              ...item,
              places: [...item.places, action.data],
            };
          }
          return item;
        }),
      };
    }
    case actionTypes.DELETE_PLACE: {
      return {
        ...state,
        places: state.places.map((item) => {
          if (item.id === action.data.category) {
            return {
              ...item,
              places: item.places.filter(
                (place) => place.id !== action.data.id,
              ),
            };
          }
          return item;
        }),
      };
    }
    case actionTypes.EDIT_PLACE: {
      return {
        ...state,
        places: state.places.map((item) => {
          if (item.id === action.data.category) {
            return {
              ...item,
              places: item.places.map((place) => {
                if (place.id === action.data.id) {
                  return action.data;
                }

                return place;
              }),
            };
          }
          return item;
        }),
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

export default placesReducer;

export { initialState };
