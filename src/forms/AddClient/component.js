import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import { useDispatch } from 'react-redux';
import { addClient } from 'commonReducers/clients/clientSlice';

import { StyledForm } from 'forms/styledForm';


const AddClientForm = ({ userID }) => {
  const [tab, setTab] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressProvince, setAddressProvince] = useState('');
  const [addressPostalCode, setAddressPostalCode] = useState('');
  const [addressCountry, setAddressCountry] = useState('');

  const dispatch = useDispatch();

  const toggleTab = (value) => {
    setTab(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      userID,
      firstName,
      lastName,
      jobTitle,
      email,
      phone,
      company,
      addressStreet,
      addressCity,
      addressPostalCode,
      addressProvince,
      addressCountry,
    };

    dispatch(addClient(data));
  };


  return (
    <StyledForm>
      <div className="controls">
        <button
          type="button"
          className="button-light tab-button"
          onClick={() => toggleTab(0)}
          disabled={tab === 0}
        >
          Client Information
        </button>
        <button
          type="button"
          className="button-light tab-button"
          onClick={() => toggleTab(1)}
          disabled={tab === 1}
        >
          Company Information
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {tab === 0 && (
          <div>
            <b>First Name</b>
            <input
              id="name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <b>Last Name</b>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <b>Job Title</b>
            <input
              id="job-title"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
            <b>Email</b>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <b>Phone</b>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        )}
        {tab === 1 && (
          <div>
            <b>Company Name</b>
            <input
              id="company-name"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <b>Address</b>
            <input
              id="street"
              type="text"
              value={addressStreet}
              onChange={(e) => setAddressStreet(e.target.value)}
              required
            />
            <b>City</b>
            <input
              id="city"
              type="text"
              value={addressCity}
              onChange={(e) => setAddressCity(e.target.value)}
              required
            />
            <b>Province</b>
            <input
              id="province"
              type="text"
              value={addressProvince}
              onChange={(e) => setAddressProvince(e.target.value)}
              required
            />
            <b>Postal Code</b>
            <input
              id="postal-code"
              type="text"
              value={addressPostalCode}
              onChange={(e) => setAddressPostalCode(e.target.value)}
              required
            />
            <b>Country</b>
            <input
              id="country"
              type="text"
              value={addressCountry}
              onChange={(e) => setAddressCountry(e.target.value)}
              required
            />
          </div>
        )}
        <hr />
        <input
          type="submit"
          value="Add Client"
          className="button"
        />
      </form>
    </StyledForm>
  );
};

AddClientForm.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default AddClientForm;
