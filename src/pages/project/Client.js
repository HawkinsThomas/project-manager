import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';
import useFetch from 'customHooks/useFetch';


const Client = ({ clientID }) => {
  const { data: client, isPending, error } = useFetch(`${SERVER}/clients?id=${clientID}`);

  return (
    <div>
      { isPending && <p>Loading client...</p>}
      { error && <p>Could not fetch client details.</p> }
      { client && (
        <div>
          <div className="mb-2">
            <h4 className="mt-0">Client Contact</h4>
            <p>
              {`${client[0].firstName} ${client[0].lastName}`}
              <br />
              {`${client[0].jobTitle}`}
              <br />
              {`Phone: ${client[0].phone}`}
              <br />
              {`Email: ${client[0].email}`}
            </p>
          </div>
          <div>
            <h4 className="mt-0">Company Information</h4>
            <p>
              {`${client[0].company}`}
              <br />
              {`${client[0].addressStreet}`}
              <br />
              {`${client[0].addressCity}, ${client[0].addressProvince}  ${client[0].addressPostalCode}`}
              <br />
              {`${client[0].addressCountry}`}
            </p>
            <Link to="/dashboard" className="link-color">Edit Contact Details</Link>
          </div>
        </div>
      )}
    </div>
  );
};

Client.propTypes = {
  clientID: PropTypes.number.isRequired,
};

export default Client;
