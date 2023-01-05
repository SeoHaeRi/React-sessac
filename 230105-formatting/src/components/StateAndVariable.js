import { useState } from 'react';

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;

  function setVariable() {
    variable += 1;
    console.log(`state: ${state}, variable: ${variable}`);
  }

  return (
    <div>
      {state} / {variable}
      <button
        onClick={() => {
          setState((state += 1));
          setVariable();
        }}
      ></button>
    </div>
  );
}
