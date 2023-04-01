// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

let num=26;

const arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let res="";
if(num===0){
    return "0";
}
if(num<0){
    num=num+ 2**32;
}
while(num>0){
    let rem=parseInt(num%16);
    res=arr[rem]+res;
    num=parseInt(num/16);
}
console.log(res);

//2nd approach

if(num===0){
    return "0";
}
let str="",temp;
while(num!==0){
    temp=num&15;
    if(temp>9){
        str=`${String.fromCharCode(temp+87)}${str}`;
    }
    else{
        str=`${temp}${str}`;
    }
    num=num>>4;
}
console.log(str);