import React, { useState } from 'react';
import { PropTypes } from 'prop-types';


const Row = ({
  firstName,
  lastName,
  jobTitle,
  phone,
  email,
  company,
  addressStreet,
  addressCity,
  addressProvince,
  addressPostalCode,
  addressCountry,
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
        <div className="col-6 text-left">{`${lastName}, ${firstName}`}</div>
        <div className="col-6 text-left">{ company }</div>
      </button>
      { expand && (
        <div>
          <div className="row p-2">
            <div className="col-md-6">
              <h4 className="mt-0">Client Contact</h4>
              <p>
                {`${firstName} ${lastName}`}
                <br />
                {jobTitle}
                <br />
                {`Phone: ${phone}`}
                <br />
                {`Email: ${email}`}
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="mt-0">Company Information</h4>
              <p>
                {company}
                <br />
                {addressStreet}
                <br />
                {`${addressCity}, ${addressProvince}  ${addressPostalCode}`}
                <br />
                {addressCountry}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Row.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  addressStreet: PropTypes.string.isRequired,
  addressCity: PropTypes.string.isRequired,
  addressPostalCode: PropTypes.string.isRequired,
  addressProvince: PropTypes.string.isRequired,
  addressCountry: PropTypes.string.isRequired,
};

export default Row;
