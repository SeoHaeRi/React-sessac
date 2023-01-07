import React from 'react';
import CustomObj from './CustomObj';

export default function CallCustomObj() {
  const pororoObj = {
    name: 'pororo',
    age: '5',
    nickName: 'play',
  };
  return (
    <div>
      <CustomObj />
      <CustomObj obj={pororoObj} />
    </div>
  );
}
