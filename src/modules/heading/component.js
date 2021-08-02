import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledComponent } from './styledComponent';


const Heading = ({ title, className }) => (
  <StyledComponent className={className}>{title}</StyledComponent>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export default Heading;
