import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


// Modules
import CustomInputLabel from '../CustomInputLabel';
import CustomInput from '../CustomInput';


const SignupForm = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const checkName = name.length >= 3;
    const checkEmail = email.indexOf('@') > 0;
    const checkPassword = password.length && (password === confirmPassword);

    if (checkName && checkEmail && checkPassword) {
      const data = { name, email, password };

      fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(() => {
        console.log('Signup Successful');
      });
    }
  };

  return (
    <div className={className}>
      <h3 className="underline-heading">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <CustomInputLabel label="name" title="Name">
          <CustomInput
            value={name}
            onChange={(e) => setName(e.target.value)}
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
