// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

let hasAlternatingBits=(n)=>{
let flag=0;
if(n&1){
    flag=1;
}
n>>=1;
while(n){
    if(n&1){
        if(flag===1){
            return false;
        }
    }
    else{
        if(flag===0){
            return false;
        }
    }
    flag=n&1;
    n>>=1;
}
return true;
}

console.log(hasAlternatingBits(5));