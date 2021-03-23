import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


// Modules
import CustomInputLabel from 'modules/forms/components/CustomInputLabel';
import CustomInput from 'modules/forms/components/CustomInput';


const SignupForm = ({ className }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const checkUserName = userName.length >= 3;
    const checkPassword = password.length;

    if (checkUserName && checkPassword) {
      fetch('http://localhost:8000/users', {
        method: 'GET',
      }).then(() => {
        console.log('Signup Successful');
      });
    }
  };

  return (
    <div className={className}>
      <h3 className="underline-heading color-medium">Log In</h3>
      <form onSubmit={handleSubmit}>
        <CustomInputLabel label="userName" title="Username">
          <CustomInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="password" title="Password">
          <CustomInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomInputLabel>
        <input type="submit" value="Submit" className="button-green" />
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  className: PropTypes.string,
};

SignupForm.defaultProps = {
  className: '',
};

export default SignupForm;
