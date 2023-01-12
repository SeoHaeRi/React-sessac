import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [render, setRender] = useState(false);
  return (
    <div>
      {render && <PracticeTimer />}
      <button onClick={() => setRender(!render)}>
        {!render ? '보이기' : '숨기기'}
      </button>
    </div>
  );
}
