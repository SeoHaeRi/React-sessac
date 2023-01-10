import React, { useState } from 'react';

export default function Counter() {
  let [num, setNum] = useState(0);
  function Increase() {
    setNum(num + 1);
  }

  function Decrease() {
    setNum(num - 2);
  }
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={Increase}> + 1 </button>
      <button onClick={() => Decrease()}> - 2 </button>
    </div>
  );
}
