// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

var search=function(nums,target){
    let l=0,h=nums.length-1;
    while(l<=h){
        let mid=Math.floor((l+h)/2);
        if(nums[mid]===target){
            return mid;
        }
        if(nums[mid]<target){
            l=mid+1;
        }
        else{
            h=mid-1;
        }
    }
    return -1;
}

console.log(search([-1,0,3,5,9,12],9));