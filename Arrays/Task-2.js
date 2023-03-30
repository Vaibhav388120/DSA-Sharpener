// Given an array find the maximum in it and return it 

let arr=[5,4,7,2,6];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);