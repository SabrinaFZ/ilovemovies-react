import React from 'react';

import './../styles/Error.css';

const Error = () => {
  return (
    <div className="error-message">
      <i className="fas fa-skull-crossbones" />
      <p className="error-message_message">Ups, the url doesn't exist!</p>
    </div>
  );
};

export default Error;
