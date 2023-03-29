// Write a program to return the reverse of a number

let n=123;
let sum=0;
while(n>0){
    let rem=parseInt(n%10);
    sum=sum*10+rem;
    n=parseInt(n/10);
}
console.log(sum);

// n=123 rem=3 sum=0*0+3=3 n=12
//n=12 rem=2 sum=3*10+2=32 n=1
//n=1 rem=1 sum=32*10+1=321 we got the reverse