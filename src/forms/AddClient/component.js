import React, { useState } from 'react';

import { StyledForm } from 'forms/styledForm';


const AddClientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <StyledForm>
      <form>
        <h4>Client Information</h4>
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

export default AddClientForm;
