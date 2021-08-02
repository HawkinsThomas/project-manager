import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { StyledRow } from './StyledRow';


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
    <StyledRow>
      <button type="button" onClick={handleClick}>
        <span>{ title }</span>
        <span>{ status }</span>
      </button>
      { expand && (
        <div>
          <div>
            <div>
              <h4>Description</h4>
              <p>{ description }</p>
              <Link to={`/project/${id}`}>View Project Tasks</Link>
            </div>
          </div>
          <div>
            <h4>Client</h4>
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
                <Link to="/dashboard">Full Contact Details</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </StyledRow>
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
