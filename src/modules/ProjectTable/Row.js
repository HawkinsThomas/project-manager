import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';

// Custom Hooks
import useFetch from 'customHooks/useFetch';


const Row = ({
  title,
  description,
  status,
  clientID,
  id,
}) => {
  const [expand, setExpand] = useState(false);

  const {
    data: client,
    isPending: clientPending,
    error: clientError,
  } = useFetch(`${SERVER}/clients?id=${clientID}`);

  const {
    data: invoice,
    isPending: invoicePending,
    error: invoiceError,
  } = useFetch(`${SERVER}/invoices?projectId=${id}`);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <button
        type="button"
        className="button-light row w-100"
        onClick={handleClick}
      >
        <div className="col-6 text-left">{ title }</div>
        <div className="col-6 text-right">{ status }</div>
      </button>
      { expand && (
        <div className="row p-2">
          <div className="col-md-8">
            <div className="mb-2">
              <h4 className="mt-0">Description</h4>
              <p>{ description }</p>
              <Link to="/dashboard" className="link-color">View Project Tasks</Link>
            </div>
            <div>
              <h4 className="mt-0">Invoice Status</h4>
              { invoicePending && <p>Loading...</p>}
              { invoiceError && <p>Could not fetch invoice.</p>}
              { invoice && (
                <div>
                  {invoice[0].status}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 bd-0 bdl-1 bd-solid bd-light pl-2">
            <h4 className="mt-0">Client</h4>
            { clientPending && <p>Loading...</p>}
            { clientError && <p>Could not fetch client.</p>}
            { client && (
              <div>
                <p>
                  {`${client[0].firstName} ${client[0].lastName}`}
                  <br />
                  {`${client[0].jobTitle}, ${client[0].company}`}
                  <br />
                  {`Phone: ${client[0].phone}`}
                  <br />
                  {`Email: ${client[0].email}`}
                </p>
                <Link to="/dashboard" className="link-color">Full Contact Details</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  clientID: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Row;
