import React, { useState, useEffect } from 'react';
import './type.css';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText("")
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex >= text.length-1) {
        // clearInterval(intervalId);
        setDisplayText("")
        currentIndex = 0;
        // return;
      }
      setDisplayText((prev) => prev + text[currentIndex]);
      currentIndex++;
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="typewriter h-10">{displayText}</div>;
};

export default Typewriter;
