import React from 'react';
import { APP_NAME } from '../../constants';


const Footer = () => {
  const footNote = `Copyright ${new Date().getFullYear()} ${APP_NAME}`;

  return (
    <footer className="">
      <span>
        { footNote }
      </span>
    </footer>
  );
};

export default Footer;
