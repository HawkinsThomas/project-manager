import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const RecentProject = ({ title, description, status }) => (
  <div className="card h-100 p-1 text-center">
    <h4 className="underline-heading m-0">
      { title }
    </h4>
    <p className="px-2 text-left color-medium">
      { description }
    </p>
    <p>
      <b>Status: </b>
      { status }
    </p>
    <Link to="/dashboard" className="button-green">View</Link>
  </div>
);

RecentProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default RecentProject;
