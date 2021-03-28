import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchProjectsById } from 'commonReducers/projects/projectSlice';
import { fetchClientsById } from 'commonReducers/clients/clientSlice';
import { fetchInvoicesById } from 'commonReducers/invoices/invoicesSlice';


const AppContainer = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjectsById(1));
    dispatch(fetchClientsById(1));
    dispatch(fetchInvoicesById(1));
  }, [dispatch]);

  return (
    <div>
      {children}
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AppContainer;
