import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PracticeTimer() {
  const [showTimer, setShowtimer] = useState(false);
  const time = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setShowtimer(!showTimer)}>시간</button>
    </div>
  );
}
