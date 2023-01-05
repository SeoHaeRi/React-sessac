import { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([0]);

  return (
    <div>
      {state}
      <button
        onClick={() => {
          setState([1]);
        }}
      ></button>
    </div>
  );
}
