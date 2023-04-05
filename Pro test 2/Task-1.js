// Given an array Containing Strings sort on the basis of number of character 'a' present. Return the sorted array
// Note if number of a is same then length will be given preference.

let maximum=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'){
            count++;
        }
    }
    return count;
}
var AAA_sort=function(sentences){
    let result=sentences.sort((a,b)=>{
        return maximum(b)-maximum(a) || b.length- a.length;
    })
    return result;
}
console.log(AAA_sort(["vaibhav", "almanac" , "is" ,"fat", "button","aabaca"]));