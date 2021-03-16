import { actionTypes } from './constants';


export const initialState = {
  isLoading: true,
};

export const homePageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
