// Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array and return the array.

let n=5;

//declare an array of size n
let arr=new Array(n);

//2nd way to declare an array of size n
// let arr=[n];

for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(arr);