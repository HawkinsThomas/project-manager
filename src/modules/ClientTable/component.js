import React from 'react';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';

// Custom Hook
import useFetch from 'customHooks/useFetch';

// Components
import Row from './Row';


const ClientTable = ({ userID }) => {
  const { data: rows, isPending, error } = useFetch(`${SERVER}/clients?userID=${userID}`);

  return (
    <div>
      { error && <p>{error}</p>}
      { isPending && <p>Loading...</p>}
      { rows && rows.map((row) => (
        <Row
          firstName={row.firstName}
          lastName={row.lastName}
          jobTitle={row.jobTitle}
          phone={row.phone}
          email={row.email}
          company={row.company}
          addressStreet={row.addressStreet}
          addressCity={row.addressCity}
          addressPostalCode={row.addressPostalCode}
          addressProvince={row.addressProvince}
          addressCountry={row.addressCountry}
          key={row.id}
        />
      ))}
    </div>
  );
};

ClientTable.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default ClientTable;
