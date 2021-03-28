import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const Client = ({ clientID }) => {
  const client = useSelector((state) => state.clients.entities.filter((c) => c.id === clientID)[0]);
  const isPending = useSelector((state) => state.clients.loading);

  return (
    <div>
      { isPending && <p>Loading client...</p>}
      { client && (
        <div>
          <div className="mb-2">
            <h4 className="mt-0">Client Contact</h4>
            <p>
              {`${client.firstName} ${client.lastName}`}
              <br />
              {`${client.jobTitle}`}
              <br />
              {`Phone: ${client.phone}`}
              <br />
              {`Email: ${client.email}`}
            </p>
          </div>
          <div>
            <h4 className="mt-0">Company Information</h4>
            <p>
              {`${client.company}`}
              <br />
              {`${client.addressStreet}`}
              <br />
              {`${client.addressCity}, ${client.addressProvince}  ${client.addressPostalCode}`}
              <br />
              {`${client.addressCountry}`}
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
