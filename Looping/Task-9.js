// Write a program to print even numbers from 1 to n except numbers which are divisible by 4. 
//Use Continue statement to avoid printing.

let n=10;
for(let i=1;i<=n;i++){
    if(i%2===0){
        if(i%4==0){
            continue;
        }
        console.log(i);
    }
}