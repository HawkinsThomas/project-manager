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

// Grab project list here and make available through Redux


const Dashboard = () => {
  const clientCount = useSelector((state) => state.clients.entities.length);

  return (
    <main>
      <Heading title="Dashboard" />
      <Banner background={background}>
        <h1>Welcome</h1>
        <p>
          <b>Active Projects: </b>
          2 (projects.length)
          <br />
          <b>Clients: </b>
          {clientCount}
        </p>
        <div className="row items-left">
          <Link to="/dashboard" className="button-white mr-1">View all projects</Link>
          <Link to="/clients" className="button-white">View all clients</Link>
        </div>
      </Banner>
      <div className="p-main row">
        <div className="col-lg-8">
          <h3>Projects</h3>
          <ProjectTable />
          <br />
          <Link to="/projects" className="link-color">View all projects</Link>
        </div>
        <div className="col-lg-4">
          <div className="px-2 bdl-1 bd-solid bd-light">
            <h3>Client List</h3>
            <ClientList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
