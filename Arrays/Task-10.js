// You are given an array Containing n-1 distinct numbers from range [1, n].
// There is one element missing from the range[1,n] in the array. Find that missing Number and return it.

let arr=[3,4,1];
let n=arr.length;
let sum=parseInt((n+1)*(n+2)/2);
let arr_sum=0,missing;
for(let i=0;i<n;i++){
    arr_sum=arr_sum+arr[i];
}
missing=sum-arr_sum;
console.log(missing);
