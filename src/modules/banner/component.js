import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledBackground, StyledContent } from './styledComponents';


const Banner = ({ background, height, children }) => (
  <StyledBackground className="p-main row" background={background} height={height}>
    <StyledContent className="col-md-4">
      { children }
    </StyledContent>
  </StyledBackground>
);

Banner.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element,
  height: PropTypes.string,
};

Banner.defaultProps = {
  background: '',
  children: null,
  height: '500px',
};

export default Banner;
