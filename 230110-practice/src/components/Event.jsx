import React from 'react';
import { useState } from 'react';

export default function Event() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  const { name, email } = form;

  const [objArr, setObjArr] = useState([
    {
      name: '코디',
      email: 'codee@gmail.com',
    },
    {
      name: '윤소희',
      email: 'yoonsohee @gmail.com',
    },
  ]);

  // let newArr = [...objArr];

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  function eventClick() {
    // newArr.push(form);
    setObjArr(objArr.concat(form));
    setForm({
      name: '',
      email: '',
    });
    // setObjArr(newArr);
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button onClick={eventClick}> 등록 </button>

      <div style={{ margin: '10' }}>
        {objArr.map((el, index) => {
          return (
            <h2 key={index}>
              {el.name}: {el.email}
            </h2>
          );
        })}
      </div>
    </>
  );
}
