// You have develop a application that basically reduce the length of string .
// the logic behind that is you can remove zero or more than zero consecutive characters from string and replace with the
// no of characters removed .
// You are testing your application you have two strings str1 and str2 . check whether str2 is valid reduced string of str1 if yes return True else return False.

const check=(str1,str2)=>{
    let res="";
    // if(str1.length!==str2.length){
    //     return false;
    // }
    for(let i=0;i<str2.length;i++){
     if(str2[i].charCodeAt(0)-'0'.charCodeAt(0)>=0 && str2[i].charCodeAt(0)-'0'.charCodeAt(0)<=9){
        for(let j=1;j<=str2[i].charCodeAt(0)-'0'.charCodeAt(0);j++){
            res=res+"1";
        }
     }
     else{
        res=res+str2[i];
     }
    }
    if(str1.length!==res.length){
        return false;
    }
    for(let i=0;i<res.length;i++){
        if(!(res[i].charCodeAt(0)-'0'.charCodeAt(0)>=0 && res[i].charCodeAt(0)-'0'.charCodeAt(0)<=9)){
            if(str1[i]!==res[i]){
                return false;
            }
        }
    }
    return true;
}

console.log(check("SHARPENER","S3P3R"));