import React from 'react';

const Alert = ({ alert }) => {
  const alertHeight = '50px'; // Set your desired height

  if (!alert) {
    return <div style={{ height: alertHeight }} />; // Empty div with fixed height
  }

  return (
    <div className={`alert alert-${alert.type}`} style={{ height: alertHeight }}>
      <div className='mb-2'>
      {alert.msg}
      </div>
      
    </div>
  );
};

export default Alert;
