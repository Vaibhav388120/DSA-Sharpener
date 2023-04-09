// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid=function(s){
    let stack=[];
    for(let i=0;i<s.length;i++){
        let prev=stack[stack.length-1];
        let curr=s[i];
        if(prev && (
            (prev==='(' && curr===')') ||
            (prev==='[' && curr===']') ||
            (prev==='{' && curr==='}')
        )){
            stack.pop();
        }else{
            stack.push(curr);
        }
    }
    return stack.length===0;
};
let s="()";
console.log(isValid(s));