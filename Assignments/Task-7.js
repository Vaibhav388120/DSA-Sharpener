// Given an array (or string), the task is to reverse the array/string.

let arr=[4, 5, 1, 2];
let start=0,end=arr.length-1;
while(start<=end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr);