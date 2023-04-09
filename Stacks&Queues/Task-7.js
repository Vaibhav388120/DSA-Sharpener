// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

var nextGreaterElements=function(nums){
    let stack=[];
    let flag;
    for(let i=0;i<nums.length;i++){
        flag=false;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i]){
                stack.push(nums[j]);
                flag=true;
                break;
            }
        }
        if(!flag){
            for(let j=0;j<i;j++){
                if(nums[j]>nums[i]){
                    stack.push(nums[j]);
                    flag=true;
                    break;
                }
            }  
        }
        if(flag===false){
            stack.push(-1);
        }
    }
    return stack;
}
console.log(nextGreaterElements([1,2,1]));