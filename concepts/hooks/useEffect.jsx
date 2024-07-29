import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect is called after every render
  useEffect(() => {
    // Increment seconds every second using setInterval
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts or before next useEffect execution
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs only once after the initial render

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
