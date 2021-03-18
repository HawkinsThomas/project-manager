import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledBackground, StyledContent } from './styledComponents';


const Banner = ({ background, children }) => (
  <StyledBackground className="p-main row" background={background}>
    <StyledContent className="col-md-4">
      { children }
    </StyledContent>
  </StyledBackground>
);

Banner.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element,
};

Banner.defaultProps = {
  background: '',
  children: null,
};

export default Banner;
