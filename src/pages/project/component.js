import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Modules
import Heading from 'modules/Heading';
import TaskTable from 'modules/TaskTable';
import Client from './Client';

import { StyledComponent } from './styledComponent';


const Project = () => {
  const { id } = useParams();

  const projectData = useSelector((state) => state.projects.entities.filter((p) => p.id === Number(id))[0]);

  return (
    <div>
      {projectData && (
        <StyledComponent>
          <Heading title={projectData.title} className="heading" />
          <section>
            <div className="quick-details">
              <span className="col-6">{`Progress: ${projectData.status}`}</span>
              <span className="col-6 text-right">{`Project Started: ${projectData.startTime}`}</span>
            </div>
            <h4 className="mt-0">Description</h4>
            <p>{projectData.description}</p>
            <hr />
            <h4 className="mt-0">Tasks</h4>
            <TaskTable projectID={id} />
          </section>
          <aside>
            <Client clientID={projectData.clientID} />
          </aside>
        </StyledComponent>
      )}
    </div>
  );
};

export default Project;
