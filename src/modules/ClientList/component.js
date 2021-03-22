import React from 'react';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';

// Custom Hooks
import useFetch from 'customHooks/useFetch';


const ClientList = ({ userID }) => {
  const { data: clients, isPending, error } = useFetch(`${SERVER}/clients?userID=${userID}`);

  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  return (
    <div>
      { isPending && <p>Loading clients...</p> }
      { error && <p>Error fetching clients.</p> }
      { clients && clients.sort(compare).map((client) => (
        <div className="row-button text-left">
          {`${client.lastName}, ${client.firstName}`}
        </div>
      ))}
    </div>
  );
};

ClientList.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default ClientList;
