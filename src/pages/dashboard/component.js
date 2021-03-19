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


const Dashboard = () => {
  const { data: projects, isPending, error } = useFetch(`${SERVER}/projects`);

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
                <RecentProject title={project.title} description={project.description} />
              </div>
            ))}
          </div>
        </>
      </Banner>
    </main>
  );
};

export default Dashboard;
