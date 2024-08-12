import React, { useState } from 'react';
import moment from 'moment-timezone';

function Slider({ timezones }) {
  const [time, setTime] = useState(moment());

  const handleChange = (event) => {
    const newTime = moment().startOf('day').add(event.target.value, 'minutes');
    setTime(newTime);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1440"
        value={time.diff(moment().startOf('day'), 'minutes')}
        onChange={handleChange}
      />
      <div>
        {timezones.map((timezone) => (
          <p key={timezone}>{timezone}: {time.tz(timezone).format('HH:mm')}</p>
        ))}
      </div>
    </div>
  );
}

export default Slider;
