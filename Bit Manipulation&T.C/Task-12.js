// Given a String Extract all numbers from it and store it inside an array. Return the Array Once extraction is completed.
// Note that if the string is "abc334vf" then the number is 334 and not 3,3,4 as individual numbers

let s="abc334v44d";
let str="",res=[];
for(let i=0;i<s.length;i++){
    if(s[i].charCodeAt(0)-'0'.charCodeAt(0)>=0 && s[i].charCodeAt(0)-'0'.charCodeAt(0)<=9){
        str=str+s[i];
    }
    else{
        if(str.length>0){
            res.push(parseInt(str));
            str="";
        }
    }
}
console.log(res);


