import React from 'react';
import ChangeObj from './ChangeObj';

export default function CallChangeObj() {
  const pororoObjArr = [
    {
      name: 'pororo',
      age: '5',
      nickName: 'play',
    },
    {
      name: 'rupy',
      age: '5',
      nickName: 'princess',
    },

    {
      name: 'chrong',
      age: '5',
      nickName: 'dino',
    },
  ];
  return <ChangeObj objArr={pororoObjArr} />;
}
