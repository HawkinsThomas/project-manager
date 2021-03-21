import React from 'react';
import { PropTypes } from 'prop-types';

// Custom Hook
import useFetch from 'customHooks/useFetch';

// Components
import Row from './Row';


const ProjectTable = ({ title, url }) => {
  const { data: rows, isPending, error } = useFetch(url);

  return (
    <div>
      <h3>{ title }</h3>
      { error && <p>{error}</p>}
      { isPending && <p>Loading...</p>}
      { rows && rows.map((row) => (
        <Row
          title={row.title}
          description={row.description}
          status={row.status}
          clientID={row.clientID}
          id={row.id}
          key={row.id}
        />
      ))}
    </div>
  );
};

ProjectTable.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectTable;
