import React from 'react';
import Heading from 'modules/Heading';
import Banner from 'modules/Banner';
import RecentProject from 'modules/RecentProject';
import background from 'img/city_banner.jpg';


const Dashboard = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Brief description here...',
      id: 1,
    },
    {
      title: 'Project Two: Project Manager',
      description: 'Building a project management tool for freelancers to keep track of projects and clients.',
      id: 2,
    },
  ];

  return (
    <main>
      <Heading title="Dashboard" />
      <Banner background={background}>
        <>
          <h1>Recent Projects</h1>
          <div className="row align-stretch">
            {
              projects.map((project) => (
                <div className="col-sm-6 mb-1" key={project.id}>
                  <RecentProject title={project.title} description={project.description} />
                </div>
              ))
            }
          </div>
        </>
      </Banner>
    </main>
  );
};

export default Dashboard;
