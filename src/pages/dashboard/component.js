import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Accordion from 'modules/Accordion';
import Banner from 'modules/Banner';
import Heading from 'modules/Heading';
import ClientList from 'modules/ClientList';

// Image
import background from 'img/city_banner.jpg';

import { StyledComponent } from './styledComponent';

// Grab project list here and make available through Redux

const projects = [{
  id: 1,
  userID: 1,
  clientID: 1,
  title: 'Database Structure',
  description: 'Create a structure for the database.',
  status: 'COMPLETE',
  startTime: '2021/03/01/1200',
},
{
  id: 2,
  userID: 1,
  clientID: 2,
  title: 'Project Manager',
  description: 'Build out the Project Manager web application.',
  status: 'INCOMPLETE',
  startTime: '2021/03/01/1200',
}];

const Dashboard = () => {
  const clientCount = useSelector((state) => state.clients.entities.length);

  return (
    <StyledComponent>
      <Heading title="Dashboard" className="heading" />
      <Banner background={background} className="banner">
        <h1>Welcome</h1>
        <p>
          <b>Active Projects: </b>
          2 (projects.length)
          <br />
          <b>Clients: </b>
          {clientCount}
        </p>
        <div className="quick-links">
          <Link to="/dashboard" className="button-light">View all projects</Link>
          <Link to="/clients" className="button-light">View all clients</Link>
        </div>
      </Banner>
      <section>
        <h3>Recent Projects</h3>
        {projects.map((project) => (
          <Accordion key={project.id} title={project.title}>
            <div className="project-details">
              <div>
                <h4>Description</h4>
                <p>{project.description}</p>
                <Link to={`/project/${project.id}`} className="button-light">View Project Tasks</Link>
              </div>
              <div>
                <h4>Client</h4>
                <p>Client details here</p>
              </div>
            </div>
          </Accordion>
        ))}
        <br />
        <Link to="/#" className="button">Create New Project</Link>
        <Link to="/projects" className="button-light">View all projects</Link>
      </section>
      <aside>
        <h3>Client List</h3>
        <ClientList />
      </aside>
    </StyledComponent>
  );
};

export default Dashboard;
