// @ts-check
const arr = [1, 2, 3, 4, 5];

console.log(arr);
const resultArr = arr.map((el, index) => {
  // index : 0 ~
  return el * 3;
});
console.log(resultArr);
