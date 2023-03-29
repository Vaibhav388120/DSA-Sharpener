// Write a program to print whether a given number is an Armstrong number or not..

let n=153;
let length=n.toString().length;
let real=n,sum=0;
while(n>0){
    let rem=parseInt(n%10);
    sum=sum+Math.pow(rem,length);
    n=parseInt(n/10);
}
if(real===sum){
    console.log(true);
}
else{
    console.log(false);
}

// 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )