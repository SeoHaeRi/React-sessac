import React from 'react';
import '../App.css';

export default function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div className="book">
      <h1>이번주 베스트셀러</h1>
      <div>
        <img src="thatYear.png" alt="표지" />
      </div>
      <h1>{title}</h1>
      <h3>저자: {author}</h3>
      <h3>판매가: {price}</h3>
      <h3>구분: {type}</h3>
    </div>
  );
}
