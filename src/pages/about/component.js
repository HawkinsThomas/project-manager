import React from 'react';
import background from 'img/city_banner.jpg';

// Modules
import Banner from 'modules/Banner';
import SignupForm from 'modules/forms/SignupForm';


const About = () => (
  <div>
    <Banner background={background}>
      <>
        <h1>Project Manager</h1>
        <p>A hobby project by Johnathan LeBlanc and Thomas Hawkins.</p>
      </>
    </Banner>
    <section className="row">
      <div className="col-md-8 p-main">
        <h2>About</h2>
        <p className="text-large color-medium mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,&nbsp;
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <h2 className="text-center mb-2">The Team</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <span>Image here</span>
            <h3>Johnathan LeBlanc</h3>
            <span className="color-medium">React Specialist, Front-end Developer</span>
          </div>
          <div className="col-md-6">
            <span>Image here</span>
            <h3>Thomas Hawkins</h3>
            <span className="color-medium">Dev ops, Back-end Developer</span>
          </div>
        </div>
      </div>
    </section>
    <section className="row items-center p-4 bg-light">
      <SignupForm className="col-4 card p-2" />
    </section>
  </div>
);

export default About;
