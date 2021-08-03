import React from 'react';
import Heading from 'modules/Heading';
import SignupForm from 'modules/forms/SignupForm';


const Signup = () => (
  <div>
    <Heading title="Sign Up" />
    <div className="row">
      <div className="col-md-6 p-main">
        <h2>Get Started. It&apos;s Easy!</h2>
        <p className="focus-text color-medium">
          Simply create a username and password to get started right away with organizing your projects.
          <br />
          <br />
          You can fill in the rest of the details later, but for now have fun!
        </p>
      </div>
      <div className="col-md-6 row p-main bg-light">
        <SignupForm className="col-8 card p-2" />
      </div>
    </div>
  </div>
);

export default Signup;
