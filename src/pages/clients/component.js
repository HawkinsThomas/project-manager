import React, { useState } from 'react';

// Components
import Heading from 'modules/Heading';
import NewClientForm from 'modules/forms/NewClientForm';
import ClientTable from 'modules/ClientTable';

import { StyledComponent } from './styledComponent';


const Clients = () => {
  const [clientForm, setClientForm] = useState(false);

  const handleClick = () => {
    setClientForm(!clientForm);
  };

  return (
    <StyledComponent>
      <Heading title="Clients" />
      <section>
        <div>
          <button onClick={handleClick} className="button" type="button">Add new Client</button>
          { clientForm && (
            <div>
              <NewClientForm userID={1} />
            </div>
          ) }
          <hr />
          <ClientTable userID={1} />
        </div>
      </section>
    </StyledComponent>
  );
};

export default Clients;
