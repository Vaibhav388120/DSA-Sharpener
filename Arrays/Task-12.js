// Write a program to sort the array in ascending order using Insertion sort algorithm. After Sorting return the array.

let arr=[4,3,2,5,1];
let n=arr.length;
for(let i=1;i<n;i++){
    let current=arr[i];
    let j=i-1;
    while(j>-1 && current<arr[j]){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=current;
}
console.log(arr);