import React from 'react';
import { PropTypes } from 'prop-types';


const CustomInput = ({ value, type, onChange }) => (
  <input
    type={type}
    required
    value={value}
    onChange={onChange}
  />
);

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomInput.defaultProps = {
  type: 'text',
};

export default CustomInput;
