import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClientsById } from 'features/clients/clientSlice';


const ClientList = () => {
  const clientList = useSelector((state) => state.clients.entities);
  const isPending = useSelector((state) => state.clients.loading);
  const dispatch = useDispatch();
  const compare = (a, b) => a.lastName.localeCompare(b.lastName);

  useEffect(() => dispatch(fetchClientsById(1)), [dispatch]);


  return (
    <div>
      {isPending && <p>Loading...</p>}
      {clientList && clientList.slice().sort(compare).map((client) => (
        <div className="row-button text-left" key={client.id}>
          {`${client.lastName}, ${client.firstName}`}
        </div>
      ))}
    </div>
  );
};

export default ClientList;
