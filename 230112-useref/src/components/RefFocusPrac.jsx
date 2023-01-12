import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function RefFocusPrac() {
  // 0 ~ 1 값이 랜덤으로 나옴 (1은 100만분의 1 확률이라 9까지 값이 필요하지만 10을 곱함, 예외처리 필요)
  const fistRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const operator = Math.floor(Math.random() * 3);
  const operatorArr = ['+', '-', 'x'];
  const inputEl = useRef();
  const [state, setState] = useState(false);

  let resultValue = 0;

  if (operatorArr[operator] === '+') {
    resultValue = fistRandomNumber + secondRandomNumber;
  } else if (operatorArr[operator] === '-') {
    resultValue = fistRandomNumber - secondRandomNumber;
  } else {
    resultValue = fistRandomNumber * secondRandomNumber;
  }

  const result = () => {
    if (parseInt(inputEl.current.value) === resultValue) {
      alert('정답입니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
      setState(!state);
    } else {
      alert('틀렸습니다. 다시 입력해 주세요');
      inputEl.current.value = '';
      inputEl.current.focus();
    }
  };
  return (
    <div>
      <h1>
        {fistRandomNumber} {operatorArr[operator]} {secondRandomNumber}
      </h1>
      <br />
      <input ref={inputEl} />
      <button onClick={result}>정답 제출!</button>
    </div>
  );
}
