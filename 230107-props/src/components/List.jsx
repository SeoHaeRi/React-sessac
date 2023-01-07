import React from 'react';
import ClassProps from './ClassProps';
import Modal from './Modal';
import ListChild from './ListChild';
import Items from './Items';

export default function List() {
  const dataArr = [
    {
      header: '리액트 공부하기',
      content: 'state 활용법 익히기',
    },
    {
      header: '코테 문제 풀기',
      content: 'Lv 0 정복 가즈아',
    },
  ];

  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      <Modal />
      <ListChild header="리액트 공부하기" content="state 활용법 익히기" />
      <ListChild header="코테 문제 풀기" content="Lv 0 정복 가즈아" />
      <ClassProps header="코테 문제 풀기" content="Lv 0 정복 가즈아" />

      <ListChild header={dataArr[0].header} content={dataArr[0].content} />
      {dataArr.map((el, index) => {
        return (
          <ListChild header={el.header} content={el.content} key={index} />
        );
      })}

      {items.map((el, index) => {
        return <Items item={el.item} price={el.price} key={index} />;
      })}

      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.item}</h2>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
