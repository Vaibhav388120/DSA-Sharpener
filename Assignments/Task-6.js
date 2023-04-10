// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

let arr=[3, 5, 4, 1, 9];
let min=arr[0];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);
console.log(max);