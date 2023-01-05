import { useState } from 'react';

function Counter() {
  const [num, setNum] = useState(1);
  return (
    <div>
      <div>{num}</div>
      <button onClick={() => {setNum(num - 1);}}>
        -
      </button>
      <button onClick={() => {setNum(num + 1);}}>
        +
      </button>
    </div>
  );
}

export default Counter;
