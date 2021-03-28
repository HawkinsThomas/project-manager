import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const Row = ({
  title,
  description,
  status,
  clientID,
  id,
}) => {
  const client = useSelector((state) => state.clients.entities.filter((c) => c.id === clientID)[0]);

  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <button
        type="button"
        className="row-button row w-100"
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
              <Link to={`/project/${id}`} className="link-color">View Project Tasks</Link>
            </div>
          </div>
          <div className="col-md-4 bd-0 bdl-1 bd-solid bd-light pl-2">
            <h4 className="mt-0">Client</h4>
            { client && (
              <div>
                <p>
                  {`${client.firstName} ${client.lastName}`}
                  <br />
                  {`${client.jobTitle}, ${client.company}`}
                  <br />
                  {`Phone: ${client.phone}`}
                  <br />
                  {`Email: ${client.email}`}
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
