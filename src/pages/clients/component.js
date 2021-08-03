import React, { useState } from 'react';

// Components
import Heading from 'modules/Heading';
// import NewClientForm from 'modules/forms/NewClientForm';
import Modal from 'modules/Modal';
import ClientTable from 'modules/ClientTable';
import AddClientForm from 'forms/AddClient';

import { StyledComponent } from './styledComponent';


const Clients = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <StyledComponent>
      <Heading title="Clients" />
      <section>
        <button onClick={toggleModal} className="button" type="button">Add new Client</button>
        {displayModal && (
          <div>
            <Modal title="Add Client" close={toggleModal}>
              <AddClientForm />
            </Modal>
          </div>
        )}
        <hr />
        <ClientTable userID={1} />
      </section>
    </StyledComponent>
  );
};

export default Clients;
