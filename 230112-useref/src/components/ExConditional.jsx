import React from 'react';
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
  const [render, setRender] = useState(true);
  return (
    <>
      {render ? (
        <PracticeOne text="PracticeOne" />
      ) : (
        <PracticeTwo text="PracticeTwo" />
      )}
      <button onClick={() => setRender(!render)}>{render ? 1 : 2}</button>
    </>
  );
}
