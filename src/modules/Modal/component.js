import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const Modal = ({ title, close, children }) => (
  <StyledComponent>
    <div className="popup floatin">
      <h3>
        { title }
        <button id="close" type="button" onClick={close}>&#10006;</button>
      </h3>
      { children }
    </div>
  </StyledComponent>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
