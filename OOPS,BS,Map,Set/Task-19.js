// You are given a array with positive and negative numbers .
// you have to find the part of the array i.e subarray which has addition 0 .
// the output should be true if subarray present in array whose sum is 0 and return false if not.
// Solve it in 0(n).

var twin=function(arr){
    let set=new Set();
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum===0 || set.has(sum)){
            return true;
        }
        set.add(sum);
    }
    return false;
}
console.log(twin([5,4,2,-3,1,6]));