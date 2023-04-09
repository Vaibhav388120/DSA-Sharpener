// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

var maxSlidingWindow=function(nums,k){
    const dequeue=[];
    const output=[];
    for(let i=0;i<nums.length;i++){
        while(nums[i]>dequeue[dequeue.length-1]){
            dequeue.pop();
        }
        dequeue.push(nums[i]);
        if(i>=k-1){
            output.push(dequeue[0]);
            if(nums[i-k+1]===dequeue[0]){
                dequeue.shift();
            }
        }
    }
    return output;
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));