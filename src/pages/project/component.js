import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Modules
import Heading from 'modules/Heading';
import TaskTable from 'modules/TaskTable';
import Client from './Client';


const Project = () => {
  const { id } = useParams();

  const projectData = useSelector((state) => state.projects.entities.filter((p) => p.id === Number(id))[0]);

  return (
    <div>
      {projectData && (
        <div>
          <Heading title={projectData.title} />
          <div className="row p-main">
            <div className="col-md-8">
              <div className="row p-1 mb-2 bg-light">
                <span className="col-6">{`Progress: ${projectData.status}`}</span>
                <span className="col-6 text-right">{`Project Started: ${projectData.startTime}`}</span>
              </div>
              <div className="pb-1 mb-1 bdb-1 bd-solid bd-light">
                <h4 className="mt-0">Description</h4>
                <p>{projectData.description}</p>
              </div>
              <div>
                <h4 className="mt-0">Tasks</h4>
                <TaskTable projectID={id} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="pl-2 bdl-1 bd-solid bd-light">
                <Client clientID={projectData.clientID} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
