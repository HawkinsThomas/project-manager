import { actionTypes } from './constants';


export const setIsLoading = (isLoading) => (
  { type: actionTypes.SET_IS_LOADING, isLoading }
);
