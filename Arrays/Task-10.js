// You are given an array Containing n-1 distinct numbers from range [1, n].
// There is one element missing from the range[1,n] in the array. Find that missing Number and return it.

let arr=[3,4,1];

//approach 1
// extra space O(N)
let len=arr.length;
let temp=[len+1];

for(let i=0;i<=len;i++){
    temp[i]=0;
}
for(let i=0;i<len;i++){
    temp[arr[i]-1]=1;
}

let ans=0;
for(let i=0;i<=len;i++){
    if(temp[i]===0){
        ans=i+1;
    }
}

console.log(ans);

//approach 2
//probability of overflow when n is large
let n=arr.length;
let sum=parseInt((n+1)*(n+2)/2);
let arr_sum=0,missing;
for(let i=0;i<n;i++){
    arr_sum=arr_sum+arr[i];
}
missing=sum-arr_sum;
console.log(missing);
