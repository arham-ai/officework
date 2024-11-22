// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);  

// const names = ["alice", "bob", "charlie"];
// const uppercasedNames = names.map(name => name.toUpperCase());
// console.log(uppercasedNames); 

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 }
];
let names = users.map(user => user.age);

console.log(names); 
