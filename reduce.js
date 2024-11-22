// let number=[1,2,3,4,5,];
// let sum=number.reduce((acum,currentValue)=>{
//     return acum+currentValue;
// },0);
// console.log(sum);

let arr = ['a', 'b', 'a', 'c', 'a'];
let char = 'b';

let count = arr.reduce((acc, curr) => curr === char ? acc + 1 : acc, 0);

console.log(count); 
