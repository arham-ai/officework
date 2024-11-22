///1
// let numbers = [1, 3, 5, 7, 8];
// let hasEven = numbers.some(num => num % 2 === 0);
// let Evennumber = numbers.filter(num => num % 2 === 0);

// console.log(hasEven,Evennumber); 

//2

// let numbers = [4, 9, 16, 25,-12];

// // Check if there is any negative number
// let hasNegative = numbers.some(num => num < 0);
// console.log(hasNegative); 

// // //3
// let fruits = ['apple', 'banana', 'cherry'];
// let startsWithB = fruits.some(fruit => fruit.startsWith('e'));
// console.log(startsWithB); 

// ///4
// let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 20 }
// ];

// let hasUnderage = users.some(user => user.age < 18);
// console.log(hasUnderage);


//some
// const numbers = [3, 8, 12, 5];
// const hasLargeNumber = numbers.some(num => num > 10);
// console.log(hasLargeNumber); // true (kyunke 12 > 10)

//splice
// const fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(2, 1); // Remove 1 element from index 2
// console.log(fruits); // ["apple", "banana", "date"]


// push
// const fruits = ["apple", "banana"];
// fruits.push("cherry");
// console.log(fruits); // ["apple", "banana", "cherry"]

//pop
// const fruits = ["apple", "banana", "cherry"];
// const removed = fruits.pop();
// console.log(removed); // "cherry"
// console.log(fruits); // ["apple", "banana"]


//join
// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.join(", ");
// console.log(result); // "apple, banana, cherry"


//concat
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const result = arr1.concat(arr2);
// console.log(result); // [1, 2, 3, 4]
