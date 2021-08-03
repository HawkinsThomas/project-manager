import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import { StyledAccordion } from './styledComponent';


const Accordion = ({ title, children }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <StyledAccordion>
      <button type="button" onClick={toggleExpand}>{title}</button>
      {expand && (
        <div className="content">{ children }</div>
      )}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Accordion;
