import React from 'react';

function TimezoneItem({ timezone, onRemove }) {
  return (
    <div className="timezone-item">
      <span>{timezone}</span>
      <button onClick={() => onRemove(timezone)}>X</button>
    </div>
  );
}

export default TimezoneItem;
