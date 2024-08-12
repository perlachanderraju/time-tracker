import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <label>
        <span>Dark Mode</span>
        <Toggle
          checked={darkMode}
          icons={false}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
}

export default DarkModeToggle;
