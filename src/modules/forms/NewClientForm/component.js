import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


// Modules
import CustomInputLabel from 'modules/forms/components/CustomInputLabel';
import CustomInput from 'modules/forms/components/CustomInput';


const SignupForm = ({ className }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressProvince, setAddressProvince] = useState('');
  const [addressPostalCode, setAddressPostalCode] = useState('');
  const [addressCountry, setAddressCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const checkFirstName = firstName.length;
    const checkLastName = firstName.length;
    const checkEmail = email.indexOf('@') > 0;

    if (checkFirstName && checkLastName && checkEmail) {
      const data = {
        firstName,
        lastName,
        jobTitle,
        email,
        phone,
        company,
        addressStreet,
        addressPostalCode,
        addressProvince,
        addressCountry,
      };

      fetch('http://localhost:8000/clients', {
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
      <h3 className="underline-heading color-medium">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <b>Client Info</b>
        <CustomInputLabel label="firstName" title="First Name">
          <CustomInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="lastName" title="Last Name">
          <CustomInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="jobTitle" title="Job Title">
          <CustomInput
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="email" title="Email">
          <CustomInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="phone" title="Phone">
          <CustomInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </CustomInputLabel>
        <b>Company Info</b>
        <CustomInputLabel label="company" title="Company">
          <CustomInput
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="addressStreet" title="Street Address">
          <CustomInput
            value={addressStreet}
            onChange={(e) => setAddressStreet(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="addressPostalCode" title="Postal Code">
          <CustomInput
            value={addressPostalCode}
            onChange={(e) => setAddressPostalCode(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="addressProvince" title="Province">
          <CustomInput
            value={addressProvince}
            onChange={(e) => setAddressProvince(e.target.value)}
          />
        </CustomInputLabel>
        <CustomInputLabel label="addressCountry" title="Country">
          <CustomInput
            value={addressCountry}
            onChange={(e) => setAddressCountry(e.target.value)}
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
