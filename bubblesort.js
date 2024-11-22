
// function bubblesort(arr){
//     let n = (arr.length)
//         for (let i=0 ;i < n - 1;i++){
//             for (let j=0;j < n- i - 1;j++){
//                 if(arr[j]>arr[j+1]){
//                     let temp = arr[j];
//                     arr[j]=arr[j+1];
//                     arr[j+1]=temp
//                 }
//             }
//         }
//         return arr;
//     }
//     console.log(bubblesort([20,18,44,12,7,14,3,8,1,5,2]));


// function bubblesort(arr){
//     let n = (arr.length)
//     for(let i=0;i < n - 1 ;i++){
//         for(let j=0;j < n- i -1;j++){
//             if (arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubblesort([64, 34, 25, 12, 22, 11, 90]));

// function bubbleSortDesc(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) { 
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   console.log(bubbleSortDesc([64, 34, 25, 12, 22, 11, 90]));