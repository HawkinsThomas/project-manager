import React from 'react';
import Heading from 'modules/Heading';
import LoginForm from 'modules/forms/LoginForm';


const Login = () => (
  <div>
    <Heading title="Log In" />
    <div className="row">
      <div className="col-md-6 p-main">
        <h2>Welcome Back!</h2>
        <p className="focus-text color-medium">
          Log back in to get back to managing your projects.
        </p>
      </div>
      <div className="col-md-6 row p-main bg-light">
        <LoginForm className="col-8 card p-2" />
      </div>
    </div>
  </div>
);

export default Login;
