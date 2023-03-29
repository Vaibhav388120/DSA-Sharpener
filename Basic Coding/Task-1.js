//Write a program to Swap two Variables a and b (Swapping basically means interchanging)

//with use of a new variable
let a=3;
let b=4;
let c;
console.log("a is "+a+" b is "+b);
c=a;
a=b;
b=c;
console.log("a is "+a+" b is "+b);


//without use of a new variable
let a1=3;
let b1=4;
console.log("a1 is "+a1+" b1 is "+b1);
a1=a1+b1;
b1=a1-b1;
a1=a1-b1;
console.log("a1 is "+a1+" b1 is "+b1);
