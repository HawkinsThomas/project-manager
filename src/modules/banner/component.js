import React from 'react';
import { PropTypes } from 'prop-types';


const Banner = ({ text, children }) => (
  <div className="banner">
    <h1>{ text }</h1>
    { children }
  </div>
);

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Banner;
