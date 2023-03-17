import React, { useState, useEffect } from 'react';
import './type.css';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        return;
      }
      setDisplayText((prev) => prev + text[currentIndex]);
      currentIndex++;
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="typewriter">{displayText}</div>;
};

export default Typewriter;
