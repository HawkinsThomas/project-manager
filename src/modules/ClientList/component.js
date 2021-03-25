import React from 'react';
import { PropTypes } from 'prop-types';


const ClientList = ({ clientList, clientListIsLoading, clientListErrorMessage }) => {
  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  if (clientListIsLoading) {
    return (
      <div>
        <p>Loading clients...</p>
      </div>
    );
  }
  return (
    <div>
      {
        clientListErrorMessage
          ? <p>{clientListErrorMessage}</p>
          : clientList && clientList.sort(compare).map((client) => (
            <div className="row-button text-left">
              {`${client.lastName}, ${client.firstName}`}
            </div>
          ))
      }
    </div>
  );
};

ClientList.propTypes = {
  clientList: PropTypes.arrayOf([]).isRequired,
  clientListIsLoading: PropTypes.bool.isRequired,
  clientListErrorMessage: PropTypes.string,
};

ClientList.defaultProps = {
  clientListErrorMessage: null,
};

export default ClientList;
