import React from 'react';
import Heading from 'modules/Heading';
import LoginForm from 'modules/forms/LoginForm';

import { StyledComponent } from './styledComponent';


const Login = () => (
  <StyledComponent>
    <Heading title="Log In" />
    <section>
      <div>
        <h2>Welcome Back!</h2>
        <p>Log back in to get back to managing your projects.</p>
      </div>
      <div>
        <LoginForm />
      </div>
    </section>
  </StyledComponent>
);

export default Login;
