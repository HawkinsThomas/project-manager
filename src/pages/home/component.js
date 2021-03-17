import React from 'react';
import Banner from '../../modules/banner';
import Heading from '../../modules/heading';


const Home = () => (
  <div>
    <Heading title="Home" />
    <Banner heading="Heading 1">
      <Heading title="Heading 2" />
    </Banner>
  </div>
);

export default Home;
