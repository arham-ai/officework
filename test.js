// //1)
// // for(var a=1; a <=98; a++)
// //     document.write(a+ "<br>");

// // //2)
     
// // for(var a=1; a <=98;  a++)
// //     document.write(a++ );

// // for(var a=2; a <=98;  a++)
// //     document.write(a++);
     
// //3

// let arr = [1, 2, 3, 4, 2, 5, 2, 6];
// let num = 2;
// let count = 0;
// for (let i = 0; i < arr.length; i++) 
//   if (arr[i] === num) {
//     count++;
//   }


// //9

// // let arr=[1,2,3,4,5,1,2];
// // let num=(1,2);
// // let count=0
// // for(let i=0 ; i<arr.length;i++){
// //     if(arr[i]===num)
// //         count++;
// // }

// //5
// // var b = [11,22,33,44,55];
// // let count=(b)
// // if (Array.apply.length=b<55)
// //     document.write(b=55 , b<Array.length, b--);
// // else ;
// // document.write(b);

// //7
// // let arr = [1, 2, 3, 4, 5,a,s,d]
// // let count=char
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === char) {
// //         count++;
// //     }
// // }

// //6
// // for (let i = 1; i <= 10; i++) {
// //     document.write(`9 x ${i} = ${9 * i} <br>`);
// //   }
  
// //4
// // let arr=[14,21,28,35,42,11,7,32,44,56]
// // let count=0
// // for (let i = 0; i < arr.length; i++);{ 
// //     if (i/=7);
// //         console.log('these are the multiple of 7');
// //     } else {
// //         console.log("these are not the multiple of 7'");
// //         }
   // //8
// num1 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < num1.length; i++) {
//   sum += num1[i];
// }
// console.log(sum);


///////////////////////////////////////////////////////////////
// // //2 DONE

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenCount=numbers.filter(num => num % 2 === 0).length;
// let oddCount=numbers.filter(num => num % 2 !== 0).length;
// console.log(`Even numbers: ${evenCount}`,`Odd numbers: ${oddCount}`);

//3 done

// let arr = [1, 2, 3, 4, 2, 5, 2, 6];
// let num = 2;
// let count = 0;
// for (let i of arr) {
//     if (i == num) 
//         count++;
// }
// console.log(count);


// //4  done
// let arr = [14, 21, 28, 35, 42, 11, 7, 32, 44, 56];

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 7 === 0) {
// console.log(arr[i]);
// }
// }

// //5 done
// let arr = [14, 21, 28, 35, 42, 11, 7, 32, 44, 56];
// let largest = arr[0];
// let smallest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) largest = arr[i];
//   if (arr[i] < smallest) smallest = arr[i];
// }
// console.log("Largest:", largest,"Smallest:", smallest);

//6 done

for (let i = 1; i <= 10; i++) {
    console.log(`${9 * i}<br>`);
}

// 7 done
// let arr = [1, 2, 3, 4, 5, 'a', 's', 'd'];
// let char = 'a';
// let count = arr.reduce((accumulator, current) => {
//     return current === char ? accumulator + 1 : accumulator;
// }, 0);
// console.log(count); 


// //8 done
// num1 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < num1.length; i++) {
//   sum += num1[i];
// }
// console.log(sum);
