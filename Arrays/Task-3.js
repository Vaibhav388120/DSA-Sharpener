// Complete the function to find the minimum in the array and return it

let arr=[5,6,2,9,-2];
let min=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);