// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
// A subarray is a contiguous subsequence of the array.

let arr=[1,4,2,5,3];
let n=arr.length;
let sum=0;
for(let i=0;i<n;i++){
    for(let j=i;j<n;j+=2){
        for(let k=i;k<=j;k++){
            sum=sum+arr[k];
        }
    }
}
console.log(sum);