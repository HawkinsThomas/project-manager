import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Accordion from 'modules/Accordion';

import { StyledComponent } from './styledComponent';


const ClientTable = () => {
  const clients = useSelector((state) => state.clients.entities);
  const isPending = useSelector((state) => state.clients.loading);

  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  return (
    <StyledComponent>
      { isPending && <p>Loading...</p>}
      {clients && clients.slice().sort(compare).map((client) => (
        <Accordion title={`${client.lastName}, ${client.firstName} ${client.company}`}>
          <div className="client-details">
            <div className="client">
              <h4>Client Contact</h4>
              <p>
                {`${client.firstName} ${client.lastName}`}
                <br />
                {client.jobTitle}
                <br />
                {`Phone: ${client.phone}`}
                <br />
                {`Email: ${client.email}`}
              </p>
            </div>
            <div className="company">
              <h4>Company Information</h4>
              <p>
                {client.company}
                <br />
                {client.addressStreet}
                <br />
                {`${client.addressCity}, ${client.addressProvince}  ${client.addressPostalCode}`}
                <br />
                {client.addressCountry}
              </p>
            </div>
          </div>
        </Accordion>
      ))}
    </StyledComponent>
  );
};

export default ClientTable;
