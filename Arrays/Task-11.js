// Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.

let arr=[4,3,2,5,1];
let n=arr.length;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[j]>arr[i]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);