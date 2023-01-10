import React from 'react';

export default function Food({ food }) {
  return (
    <div>
      <h1>
        어제도 먹은 <span style={{ color: 'red' }}>{food}</span>
      </h1>
      <span>
        매콤 달콤 짭짤 쫄깃 떡이 들은
        <span style={{ color: 'red' }}>{food}</span>
      </span>
    </div>
  );
}

Food.defaultProps = {
  food: '떡볶이',
};
