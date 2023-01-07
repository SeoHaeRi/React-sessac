import React from 'react';

export default function ListChild({ header, content }) {
  // 인자를 구조분해할당
  // 변수로 구조분해할당
  // const { header, content } = props
  return (
    <div>
      <h2>{header}</h2>
      <p>{content}</p>
      <hr />
    </div>
  );
}
