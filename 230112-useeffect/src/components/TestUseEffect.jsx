import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력 하세요!');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('🖱️ 버튼 클릭');
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log('⌨️ 키 입력');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('👌 렌더링 될 때 마다 실행');
  });

  useEffect(() => {
    console.log('⛰️ mount 될 때만 실행');
  }, []);

  useEffect(() => {
    console.log('🖱️🖱️ 버튼 클릭시에만 실행');
  }, [count]);

  useEffect(() => {
    console.log('⌨️⌨️ 키 입력시에만 실행');
  }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </div>
  );
}
