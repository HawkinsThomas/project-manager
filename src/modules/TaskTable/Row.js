import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


const Row = ({
  title,
  description,
  status,
}) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <button
        type="button"
        className="row-button row w-100"
        onClick={handleClick}
      >
        <div className="col-6 text-left">{ title }</div>
        <div className="col-6 text-right">{ status }</div>
      </button>
      { expand && (
        <div className="row p-2">
          <div className="col-md-8">
            <h4 className="mt-0">Description</h4>
            <p>{ description }</p>
          </div>
          <div className="col-md-4">
            Rate
          </div>
        </div>
      )}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Row;
