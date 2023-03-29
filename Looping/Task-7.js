// Write a program to print all odd numbers from 1 to n using for loops

let n=7;
for(let i=1;i<=n;i++){
    if(i%2!==0){
        console.log(i);
    }
}

//2nd approach
for(let i=1;i<=n;i+=2){
    console.log(i);
}