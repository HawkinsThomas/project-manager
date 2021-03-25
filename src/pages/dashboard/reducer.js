import { actionTypes } from './constants';


export const initialState = {
  clientList: [],
  clientListIsLoading: false,
  clientListErrorMessage: null,
};

export const clientReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CLIENT_LIST_REQUEST:
      return { ...state, clientListIsLoading: true };
    case actionTypes.GET_CLIENT_LIST_SUCCESS:
    case actionTypes.GET_CLIENT_LIST_ERROR:
      return { ...state, clientListIsLoading: false };
    case actionTypes.SET_CLIENT_LIST:
      return { ...state, clientList: action.clientList };
    case actionTypes.SET_CLIENT_LIST_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};
