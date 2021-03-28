import { configureStore } from '@reduxjs/toolkit';
import projects from 'commonReducers/projects/projectSlice';
import clients from 'commonReducers/clients/clientSlice';
import invoices from 'commonReducers/invoices/invoicesSlice';


export default configureStore({
  reducer: {
    projects,
    clients,
    invoices,
  },
});
