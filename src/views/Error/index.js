import React from 'react';
import './Error.scss';

const Error = () => {
  return (
    <div className="error">
      <i className="fas fa-skull-crossbones" />
      <p className="error_message">Ups, the url doesn't exist!</p>
    </div>
  );
};

export default Error;
