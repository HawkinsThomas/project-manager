import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Heading from 'modules/Heading';
import Banner from 'modules/Banner';
import ProjectTable from 'modules/ProjectTable';
import ClientList from 'modules/ClientList';

// Image
import background from 'img/city_banner.jpg';

import { StyledComponent } from './styledComponent';

// Grab project list here and make available through Redux


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
          <Link to="/dashboard" className="button">View all projects</Link>
          <Link to="/clients" className="button">View all clients</Link>
        </div>
      </Banner>
      <section>
        <h3>Projects</h3>
        <ProjectTable />
        <br />
        <Link to="/projects" className="link-color">View all projects</Link>
      </section>
      <aside>
        <h3>Client List</h3>
        <ClientList />
      </aside>
    </StyledComponent>
  );
};

export default Dashboard;
