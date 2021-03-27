import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Row from './Row';


const ClientTable = () => {
  const rows = useSelector((state) => state.clients.entities);
  const isPending = useSelector((state) => state.clients.loading);

  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  return (
    <div>
      { isPending && <p>Loading...</p>}
      { rows && rows.slice().sort(compare).map((row) => (
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

export default ClientTable;
