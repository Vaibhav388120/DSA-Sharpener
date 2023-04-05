//A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

var findPeakElement=function(arr){
    let l=0,h=arr.length-1;
    arr[-1]=arr[arr.length]= -2* Number.MAX_VALUE;
    while(l<=h){
        let mid=Math.floor((l+h)/2);
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid;
        }
        else if(arr[mid]<arr[mid-1]){
            h=mid-1;
        }
        else{
            l=mid+1;
        }
    }
}
console.log(findPeakElement([1,2,3,1]));