// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) { 
//         let minIndex = i; 
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j; 
//             }
//         }
//         if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;   
//         }      
//     }
//     return arr;
// }
// console.log(selectionSort([64, 25, 12, 22, 11]));
// function selectionsort(arr){
//     let n = arr.length;
//     for (let i=0; i<n - 1;i++){
//         let minindex=i;
//         for (let j=i+1;j < n;j++){
//             if(arr[j]>arr[minindex]){
//                 minindex=j;
//             }
//         }
//         if (minindex !==i){
//             let temp=arr[i];
//             arr[i]=arr[minindex];
//             arr[minindex]=temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionsort([64, 25, 12, 22, 11]));



function slectionsort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        let minindex = i;
        for (let j = i+1; j < n; j++){
            if(arr[j]>arr[minindex]){
            minindex=j;
            }
        }
        if (minindex !==i){
            let temp=arr[i];
            arr[i]=arr[minindex];
            arr[minindex]=temp;
        }
    }
    return arr;
}
console.log(slectionsort([22,33,1,40,7,8]));
