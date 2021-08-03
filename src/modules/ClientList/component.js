import React from 'react';
import { useSelector } from 'react-redux';


const ClientList = () => {
  const clientList = useSelector((state) => state.clients.entities);
  const isPending = useSelector((state) => state.clients.loading);

  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {clientList && clientList.slice().sort(compare).map((client) => (
        <button key={client.id} type="button" className="button-wide">
          {`${client.lastName}, ${client.firstName}`}
        </button>
      ))}
    </div>
  );
};

export default ClientList;
