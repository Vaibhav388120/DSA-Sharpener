// Given an array find the maximum sum subarray. Return the maximum sum of the subarray.
let arr=[5,2,-4,-5, 3,-1,2,3,1];
let length=arr.length;
let max=arr[0];
for(let i=0;i<length;i++){
    for(let j=i;j<length;j++){
        let sum=0;
        for(let k=i;k<=j;k++){
            sum=sum+arr[k];
        }
        if(sum>max){
            max=sum;
        }
    }
}
console.log(max);