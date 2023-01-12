import React from 'react';
import { useState } from 'react';

export default function ConditionalRender() {
  const [condition, setCondition] = useState('보여주기');
  const onChange = () => {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  };
  return (
    <>
      {condition === '감추기' && <h1>안녕</h1>}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
