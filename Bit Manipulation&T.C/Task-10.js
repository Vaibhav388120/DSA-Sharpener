// Given an Array (arr) of size n. It only contains elements from range [1,n].

// Return an Array of all integers in the range [1,n] that do not appear in the array.

let nums=[4,3,2,7,8,2,3,1];
let result=[];
for(let i=0;i<nums.length;i++){
    let index=Math.abs(nums[i])-1;
    if(nums[index]>0){
        nums[index]=nums[index]*-1;
    }
}
for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
        result.push(i+1);
    }
}
console.log(result);