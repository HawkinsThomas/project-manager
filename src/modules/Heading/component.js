import React from 'react';
import { PropTypes } from 'prop-types';


const Heading = ({ title }) => (
  <h1 className="p-main m-0 bg-color-light text-dark">{title}</h1>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
