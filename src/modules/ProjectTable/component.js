import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Row from './Row';

import { StyledTable } from './StyledTable';


const ProjectTable = () => {
  const rows = useSelector((state) => state.projects.entities);
  const isPending = useSelector((state) => state.projects.loading);

  return (
    <StyledTable>
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
    </StyledTable>
  );
};

export default ProjectTable;
