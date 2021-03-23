import React, { useState } from 'react';

// Components
import Heading from 'modules/Heading';
import NewClientForm from 'modules/forms/NewClientForm';
import ClientTable from 'modules/ClientTable';


const Clients = () => {
  const [clientForm, setClientForm] = useState(false);

  const handleClick = () => {
    setClientForm(!clientForm);
  };

  return (
    <div>
      <Heading title="Clients" />
      <div className="p-main row items-left">
        <div className="col-md-8">
          <button onClick={handleClick} className="button-green mb-1" type="button">Add new Client</button>
          { clientForm && (
            <div>
              <NewClientForm userID={1} />
            </div>
          ) }
          <hr />
          <div className="row">
            <h3 className="col-6 mt-0">Name</h3>
            <h3 className="col-6 mt-0">Company</h3>
          </div>
          <ClientTable userID={1} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
