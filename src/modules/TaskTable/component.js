import React from 'react';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';

// Custom Hook
import useFetch from 'customHooks/useFetch';

// Components
import Row from './Row';


const TaskTable = ({ projectID }) => {
  const { data: rows, isPending, error } = useFetch(`${SERVER}/tasks?projectID=${projectID}`);

  return (
    <div>
      { error && <p>{error}</p>}
      { isPending && <p>Loading...</p>}
      { rows && rows.map((row) => (
        <Row
          title={row.title}
          description={row.description}
          status={row.status}
          key={row.id}
        />
      ))}
    </div>
  );
};

TaskTable.propTypes = {
  projectID: PropTypes.string.isRequired,
};

export default TaskTable;
