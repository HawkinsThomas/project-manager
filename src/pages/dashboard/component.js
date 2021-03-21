import React from 'react';
import { SERVER } from 'constants.js';

// Components
import Heading from 'modules/Heading';
import Banner from 'modules/Banner';
import RecentProject from 'modules/RecentProject';

// Image
import background from 'img/city_banner.jpg';

// Custom Hook
import useFetch from 'customHooks/useFetch';
import ProjectTable from 'modules/ProjectTable';


const Dashboard = () => {
  const url = `${SERVER}/projects`;
  const { data: projects, isPending, error } = useFetch(url);

  return (
    <main>
      <Heading title="Dashboard" />
      <Banner background={background}>
        <>
          <h1>Recent Projects</h1>
          <div className="row align-stretch">
            { error && <p>{error}</p>}
            { isPending && <p>Loading...</p>}
            { projects && projects.map((project) => (
              <div className="col-sm-6 mb-1" key={project.id}>
                <RecentProject
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  status={project.status}
                />
              </div>
            ))}
          </div>
        </>
      </Banner>
      <div className="p-main row">
        <div className="col-lg-8">
          <ProjectTable
            title="Projects"
            url={url}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
