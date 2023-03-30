// Write a program to store first n prime numbers in an array . After storing return the array.﻿

let n=5;
let count=0;
let start=2;
while(count<n){
    let flag=true;
for(let i=2;i<start;i++){
    if(start%i===0){
        flag=false;
        break;
    }
}
if(flag){
    console.log(start);
    count++;
}
start++;
}