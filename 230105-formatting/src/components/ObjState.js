import { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: 'lee' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          setState({ teacher: 'lees' });
          console.log(state);
        }}
      >
        영어?
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
