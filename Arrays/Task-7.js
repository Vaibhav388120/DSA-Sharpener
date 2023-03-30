// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

 let nums=[1,2,3,4];
 let n=nums.length;
 let result=[n];
 let sum=0;
 for(let i=0;i<n;i++){
  sum=sum+nums[i];
  result[i]=sum;
 }
 console.log(result);
