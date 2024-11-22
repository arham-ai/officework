// question 1 done

// let num=['karachi','siraiki','intern','employee'];
// let word=(num.includes('intern'));
// console.log(word);

// // question no 2
// let num =[1,2,3,33,4,5,22,8];
// let count = 0;
// let maxvalue = num.reduce((acc, curr) => Math.max(acc,curr));
// console.log(maxvalue); 

//question 3
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenSum = numbers.reduce((sum, num) => num % 2 == 0 ? sum + num : sum, 0);
// console.log(evenSum);

// question no 4

let number=[10, 7,7,5,10,0,0];
let sum=number.reduce((acum,currentValue)=>{
    return acum+currentValue/number.length;
},0);
console.log(sum);


// let sum =number.reduce ((acc,current)=>{
//     return acc+current/number.length
// },0);
// console.log(sum)

// question no 5
// let user=[
//     {name:'arham',age:23},
//     {name:'umer',age:22},
//     {name:'iqbal',age:21}
// ];
// let names = user.map(user => user.name);
// console.log(names);

// question no 6

// let num = [1,2,3,4,5,5,5,6,7,8,9];
// let count = num.filter((acc, curr) => num.indexOf(acc) === curr);
// console.log(count);

//question no 7

// let num=[5,7,8,12,14,18,19,20];
// let count=0;
// let overage=num.filter(num=> num  < 18 ==0);
// console.log(overage);

//////////////////

//question no 6

// let num = [9,9,7,7,8];
// let count = num.filter((acc, curr) => {
//     console.log("Array Value => ",num[curr],'LLL',curr,' :   curr')
//     console.log(num.indexOf(acc),'acccc')
//     console.log(num.indexOf(acc) === curr, 'RRRRRRRR')
//    return num.indexOf(acc) === curr
// });
// console.log(count);

// var a=['sanjay','aman','rehman','aman'];
// indexof('search item',start)