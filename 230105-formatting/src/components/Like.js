import { useState } from 'react';

export default function Like() {
  let [like, setLike] = useState(1);
  return (
    <div>
      <button onClick={() => setLike((like += 1))}>
        {like < 10 ? '👍' : '😘'}
      </button>
      <br />
      <span>{like}</span>
    </div>
  );
}
