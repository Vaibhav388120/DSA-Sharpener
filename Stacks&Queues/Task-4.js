// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

var validateStackSequences=function(pushed,popped){
    let stack=[];
    let i=0;
    for(let element of pushed){
        stack.push(element);
        while(stack.length && stack[stack.length-1]===popped[i]){
            stack.pop();
            i++;
        }
    }
    return stack.length===0;
}

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));