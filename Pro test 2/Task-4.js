// A match is said to be fair if both the teams are of equal strength .
// You are given an array of integers which represent the strength of that player . you have to check whether addition of strengths on left side and right side are equal or not.
// if both sides have equal strength, then return True else return False .

var twin=function(arr){
    let lsum=0,rsum=0;
    for(let i=0;i<arr.length;i++){
        lsum+=arr[i];
    }
    for(let i=arr.length-1;i>=0;i--){
        lsum=lsum-arr[i];
        rsum+=arr[i];
        if(lsum===rsum){
            return true;
        }
    }
    return false;
}
console.log(twin([1,2,3,2,1,2, 5]));