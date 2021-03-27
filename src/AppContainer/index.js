import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchClientsById } from 'commonReducers/clients/clientSlice';


const AppContainer = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchClientsById(1)), [dispatch]);

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
