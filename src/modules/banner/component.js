import React from 'react';
import { PropTypes } from 'prop-types';


const Banner = ({ heading, background, children }) => {
  const styles = {};

  if (background) {
    styles.backgroundImage = background;
  }

  return (
    <div className="banner" style={styles}>
      <h1>{ heading }</h1>
      { children }
    </div>
  );
};

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  background: PropTypes.string,
  children: PropTypes.element,
};

Banner.defaultProps = {
  background: '',
  children: null,
};

export default Banner;
