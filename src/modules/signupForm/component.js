import React, { useState } from 'react';

// Modules
import CustomInputLabel from '../customInputLabel';
import CustomInput from '../customInput';


const SignupForm = () => {
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
      console.log('Validated.');
      // Submit form
    }
  };

  return (
    <div className="form-card">
      <h3>Sign Up</h3>
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
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
};

export default SignupForm;
