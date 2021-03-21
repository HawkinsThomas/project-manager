import React from 'react';
import { useParams } from 'react-router-dom';
import { SERVER } from 'constants.js';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Modules
import Heading from 'modules/Heading';
import TaskTable from 'modules/TaskTable';
import Client from './Client';


const Project = () => {
  const { id } = useParams();

  const {
    data: projectData,
    isPending: projectPending,
    error: projectError,
  } = useFetch(`${SERVER}/projects?id=${id}`);

  return (
    <div>
      {projectPending && <p>Loading...</p>}
      {projectError && <p>Could not fetch project data.</p>}
      {projectData && (
        <div>
          <Heading title={projectData[0].title} />
          <div className="row p-main">
            <div className="col-md-8">
              <div className="row p-1 mb-2 bg-light">
                <span className="col-6">{`Progress: ${projectData[0].status}`}</span>
                <span className="col-6 text-right">{`Project Started: ${projectData[0].startTime}`}</span>
              </div>
              <div className="pb-1 mb-1 bdb-1 bd-solid bd-light">
                <h4 className="mt-0">Description</h4>
                <p>{projectData[0].description}</p>
              </div>
              <div>
                <h4 className="mt-0">Tasks</h4>
                <TaskTable projectID={id} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="pl-2 bdl-1 bd-solid bd-light">
                <Client clientID={projectData[0].clientID} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
