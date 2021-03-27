import { configureStore } from '@reduxjs/toolkit';
import clientsSlice from 'features/clients/clientSlice';


export default configureStore({
  reducer: {
    clients: clientsSlice,
  },
});
