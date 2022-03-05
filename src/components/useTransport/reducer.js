import * as actionTypes from './actionTypes';

const initialState = {
  localTransport: [],
  howToGetTransport: [],
  loadingLocal: true,
  loadingHowToGet: true,
  errorLocal: null,
  errorHowToGet: null,
};

function transportReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_LOCAL: {
      return {
        ...state,
        localTransport: action.data,
        loadingLocal: false,
        errorLocal: null,
      };
    }
    case actionTypes.SUCCESS_HOWTOGET: {
      return {
        ...state,
        howToGetTransport: action.data,
        loadingHowToGet: false,
        errorHowToGet: null,
      };
    }

    case actionTypes.EDIT_LOCAL: {
      return {
        ...state,
        localTransport: state.localTransport.map((transport) => {
          if (transport.id === action.data.id) {
            return action.data;
          }
          return transport;
        }),
      };
    }
    case actionTypes.EDIT_HOWTOGET: {
      return {
        ...state,
        howToGetTransport: state.howToGetTransport.map((transport) => {
          if (transport.id === action.data.id) {
            return action.data;
          }
          return transport;
        }),
      };
    }
    case actionTypes.DELETE_LOCAL: {
      return {
        ...state,
        localTransport: state.localTransport.filter(
          (transport) => transport.id !== action.data,
        ),
      };
    }

    case actionTypes.DELETE_HOWTOGET: {
      return {
        ...state,
        howToGetTransport: state.howToGetTransport.filter(
          (transport) => transport.id !== action.data,
        ),
      };
    }

    case actionTypes.ADD_LOCAL: {
      return {
        ...state,
        localTransport: [action.data, ...state.localTransport],
      };
    }

    case actionTypes.ADD_HOWTOGET: {
      return {
        ...state,
        howToGetTransport: [action.data, ...state.howToGetTransport],
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default transportReducer;

export { initialState };
