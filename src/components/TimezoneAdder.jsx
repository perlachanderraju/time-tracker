import React, { useState } from 'react';

function TimezoneAdder({ timezones, setTimezones }) {
    
  const [newTimezone, setNewTimezone] = useState('');

  const handleAdd = () => {
    if (newTimezone && !timezones.includes(newTimezone)) {
      setTimezones([...timezones, newTimezone]);
    }
    setNewTimezone('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTimezone}
        onChange={(e) => setNewTimezone(e.target.value)}
        placeholder="Enter Timezone (e.g., America/New_York)"
      />
      <button onClick={handleAdd}>Add Timezone</button>
    </div>
  );
}

export default TimezoneAdder;
