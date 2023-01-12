import React, { useState } from 'react';
import { useRef } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');
  const inputVal = useRef();

  const onChangeText = () => {
    setText(inputVal.current.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputVal} onChange={onChangeText} />
    </div>
  );
}
