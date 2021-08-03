import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


// Modules
import CustomInputLabel from 'modules/forms/components/CustomInputLabel';
import CustomInput from 'modules/forms/components/CustomInput';


const SignupForm = ({ className }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const checkUserName = userName.length >= 3;
    const checkEmail = email.indexOf('@') > 0;
    const checkPassword = (password.length > 3) && (password === confirmPassword);

    if (checkUserName && checkEmail && checkPassword) {
      const data = {
        userName,
        password,
        email,
      };

      fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(() => 'Signup Successful');
    }
  };

  return (
    <div className={className}>
      <h3 className="underline-heading color-medium">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <CustomInputLabel label="userName" title="Username">
          <CustomInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="email" title="Email">
          <CustomInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="password" title="Password">
          <CustomInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="password" title="Confirm Password">
          <CustomInput
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
