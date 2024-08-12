import React, { useState } from 'react';
import Slider from './components/Slider';
import TimezoneList from './components/TimezoneList';
import DatePicker from './components/DatePicker';
import DarkModeToggle from './components/DarkModeToggle';
import TimezoneAdder from './components/TimezoneAdder';

function App() {
  const [timezones, setTimezones] = useState(['UTC', 'Asia/Kolkata']);

  return (
    <div className="App">
      <DarkModeToggle />
      <TimezoneAdder timezones={timezones} setTimezones={setTimezones} />
      <Slider timezones={timezones} />
      <DatePicker />
      <TimezoneList timezones={timezones} setTimezones={setTimezones} />
    </div>
  );
}

export default App;
