// @ts-check
let num = 1;
num = 2;
console.log(num);

// const str = 'Hello';
// const num = Math.log(str);
// console.log(num);

// 전개 연산자
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const copyArr = [...arr];
console.log(copyArr);

console.log(arr === copyArr);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
};
const copyObj = { ...obj, lupy: 'lupy' };
console.log(copyObj);
console.log(obj === copyObj);
//
