import React from 'react';
import { APP_NAME } from '../../constants';


const Footer = () => {
  const footNote = `Copyright ${new Date().getFullYear()} ${APP_NAME}`;

  return (
    <footer>
      <div className="row p-main py-1 bg-dark text-white">
        <div className="col-3">
          <h6>Row 1</h6>
        </div>
        <div className="col-3">
          <h6>Row 2</h6>
        </div>
        <div className="col-3">
          <h6>Row 3</h6>
        </div>
        <div className="col-3">
          <h6>Row 4</h6>
        </div>
      </div>
      <div className="row p-main py-1 bg-black text-light">
        { footNote }
      </div>
    </footer>
  );
};

export default Footer;
