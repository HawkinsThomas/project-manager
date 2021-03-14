import React from 'react';
import { APP_NAME } from '../../constants';

// Modules
import Banner from '../../modules/banner';
import SignupForm from '../../modules/signupForm';


const About = () => {
  const title = `About ${APP_NAME}`;
  return (
    <div>
      <Banner heading={title}>
        <p>A hobby project by Johnathan LeBlanc and Thomas Hawkins.</p>
      </Banner>
      <section>
        <h2>Sign Up</h2>
        <SignupForm />
      </section>
    </div>
  );
};

export default About;
