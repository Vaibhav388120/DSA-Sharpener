// Write a program to print the digits of a number.

let n=153;
while(n>0){
    let rem=Math.floor(n%10);
    console.log(rem);
    n=Math.floor(n/10);
}

// n=153 to get last digit %10 so 3 as remainder prints 3 now divide the n with 10 to remove last digit as we printed already
//n=15 n%10 so 5 as remainder prints 5 n now becomes 1
//n=1 1%10 so 1 as remainder prints 1 n now becomes <0 so while loop terminates