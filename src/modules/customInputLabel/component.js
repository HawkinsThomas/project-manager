import React from 'react';
import { PropTypes } from 'prop-types';


const CustomInputLabel = ({ label, title, children }) => (
  <label htmlFor={label}>
    <span>
      { title }
    </span>
    { children }
  </label>
);

CustomInputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomInputLabel;
