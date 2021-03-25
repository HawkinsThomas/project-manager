import sources from 'api/sources.js';
import { actionTypes, clientListErrorMessage } from './constants';


export const getClientListRequest = () => ({
  type: actionTypes.GET_CLIENT_LIST_REQUEST,
});

export const getClientListSuccess = () => ({
  type: actionTypes.GET_CLIENT_LIST_SUCCESS,
});

export const getClientListError = () => ({
  type: actionTypes.GET_CLIENT_LIST_SUCCESS,
});

export const setClientList = (clientList) => ({
  type: actionTypes.SET_CLIENT_LIST,
  clientList,
});

export const setClientListErrorMessage = (errorMessage) => ({
  type: actionTypes.SET_CLIENT_LIST_ERROR_MESSAGE,
  errorMessage,
});

export const getClientList = (userID) => (dispatch) => {
  dispatch(getClientListRequest());
  sources.clientList.get(userID)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setClientList(data));
      dispatch(getClientListSuccess());
    })
    .catch(() => {
      dispatch(setClientListErrorMessage(clientListErrorMessage));
      dispatch(getClientListError());
    });
};
