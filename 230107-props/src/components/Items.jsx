import React from 'react';

export default function Items(props) {
  const { item, price } = props;
  return (
    <div>
      <h2>{item}</h2>
      <p>{price}</p>
    </div>
  );
}
