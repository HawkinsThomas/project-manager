import React from 'react';
import { Link } from 'react-router-dom';
import background from 'img/city_banner.jpg';
import Banner from 'modules/Banner';


const Home = () => (
  <div>
    <Banner background={background}>
      <h1>Welcome to Project Manager</h1>
      <p>
        A hobby project by Johnathan LeBlanc and Thomas Hawkins.
        Designed for freelancers or business owners to help manage their lists of projects and clients.
      </p>
      <Link to="/signup" className="button">Get Started</Link>
    </Banner>
  </div>
);

export default Home;
