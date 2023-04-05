// You are Given an array Sorted in ascending order. Find the Starting and ending Position of a given Target value.
// If target is not found in the array, return [-1, -1].

var elementSearch=function(nums,target){
    const binSearch=(nums,target,left)=>{
        let l=0,h=nums.length-1;
        let i=-1;
        while(l<=h){
            let mid=Math.floor((l+h)/2);
            if(nums[mid]>target){
                h=mid-1;
            }
            else if(target>nums[mid]){
                l=mid+1;
            }
            else{
                i=mid;
                if(left){
                    h=mid-1;
                }
                else{
                    l=mid+1;
                }
            }
        }
        return i;
    }
    let left=binSearch(nums,target,true);
    let right=binSearch(nums,target,false);
    return [left,right];
}

console.log(elementSearch([5,7,7,8,8,10],8));