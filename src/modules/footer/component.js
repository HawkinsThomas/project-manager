import React from 'react';
import { APP_NAME } from '../../constants';
import { StyledComponent } from './styledComponent';


const Footer = () => {
  const footNote = `Copyright ${new Date().getFullYear()} ${APP_NAME}`;

  return (
    <StyledComponent>
      <div className="footer-top">
        <div>
          <h6>Row 1</h6>
        </div>
        <div>
          <h6>Row 2</h6>
        </div>
        <div>
          <h6>Row 3</h6>
        </div>
        <div>
          <h6>Row 4</h6>
        </div>
      </div>
      <div className="footer-bottom">
        { footNote }
      </div>
    </StyledComponent>
  );
};

export default Footer;
