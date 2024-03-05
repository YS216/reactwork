/* 
let num1 = 10;
let num2 = 20;

// export default num1;
// export default num1, num2; 안됨
export {num1, num2};  // 여러개
 */

let pList = 
[
  {
    id:0,
    title:"vest",
    content:"Made in the States",
    price : 35000
  },
  {
    id:1,
    title:"blouse",
    content:"Made in Seoul",
    price : 50000
  },
  {
    id:2,
    title:"jacket",
    content:"Made in France",
    price : 70000
  },
]

export default pList;