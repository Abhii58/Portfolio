
import React, { useState, useEffect } from 'react';
import './clock.css'; // Import the CSS file for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });

  return (
    <div className="clock-container">
      <div className="time-display">{formattedTime}</div>
    </div>
  );
};

export default Clock

