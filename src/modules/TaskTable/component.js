import React from 'react';
import { PropTypes } from 'prop-types';
import { SERVER } from 'constants.js';

// Custom Hook
import useFetch from 'customHooks/useFetch';

// Components
import Accordion from 'modules/Accordion';

import { StyledComponent } from './styledComponent';


const TaskTable = ({ projectID }) => {
  const { data: rows, isPending, error } = useFetch(`${SERVER}/tasks?projectID=${projectID}`);

  return (
    <StyledComponent>
      { error && <p>{error}</p>}
      { isPending && <p>Loading...</p>}
      {rows && rows.map((row) => (
        <Accordion title={row.title}>
          <div className="task-details">
            <div>
              <h4>Description</h4>
              <p>{row.description}</p>
            </div>
            <div>
              <h4>Rate</h4>
              <p>
                $
                {row.rate}
              </p>
            </div>
          </div>
        </Accordion>
      ))}
    </StyledComponent>
  );
};

TaskTable.propTypes = {
  projectID: PropTypes.string.isRequired,
};

export default TaskTable;
