// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

var decodeString=function(s){
    let stack=[];
    let i=0;
    while(i<s.length){
        if(s[i]!==']'){
            stack.push(s[i++]);
            continue;
        }
        let str="",n="",segment="";
        while(stack[stack.length-1]!=='['){
            str=stack.pop()+str;
        }
        stack.pop();
        while(!isNaN(stack[stack.length-1])){
            n=stack.pop()+n;
        }
        for(let j=0;j<Number(n);j++){
            segment=str+segment;
        }
        stack.push(segment);
        i++;
    }
    return stack.join("");
}
console.log(decodeString("3[a]2[bc]"));