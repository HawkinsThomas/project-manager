import { configureStore } from '@reduxjs/toolkit';
import clients from 'commonReducers/clients/clientSlice';


export default configureStore({
  reducer: {
    clients,
  },
});
