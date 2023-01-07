import React, { useState } from 'react';

export default function ChangeObj(props) {
  let [index, setIndex] = useState(0);
  const obj = props.objArr[index];

  function changeProfile() {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <h1>이름 : {obj.name}</h1>
      <h2>나이 : {obj.age}</h2>
      <h3>별명 : {obj.nickName}</h3>
      <button onClick={changeProfile}>프로필 변경하기</button>
    </div>
  );
}
