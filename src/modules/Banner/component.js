import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledBackground, StyledContent } from './styledComponents';


const Banner = ({
  background,
  height,
  children,
  className,
}) => (
  <StyledBackground className={className} background={background} height={height}>
    <StyledContent>
      { children }
    </StyledContent>
  </StyledBackground>
);

Banner.propTypes = {
  background: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  height: PropTypes.string,
  className: PropTypes.string,
};

Banner.defaultProps = {
  background: '',
  height: '500px',
  className: '',
};

export default Banner;
