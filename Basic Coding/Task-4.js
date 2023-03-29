// Given a variable D (distance) write a program to print the cost associated with it

let d=700;
if(d>=0 &&d<=100){
 console.log(5.00);
}
else if(d>100 && d<=500){
    console.log(8.00);
}
else if(d>500 && d<1000){
    console.log(10.00);
}
else{
    console.log(12.00);
}