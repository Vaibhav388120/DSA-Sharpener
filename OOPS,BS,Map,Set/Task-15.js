// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.

var findLucky = function(arr) {
    let myMap=new Map();
    for(let i=0;i<arr.length;i++){
        if(myMap.has(arr[i])){
            myMap.set(arr[i],myMap.get(arr[i])+1);
        }
        else{
            myMap.set(arr[i],1);
        }
    }
    let output=[];
    for(let [key,value] of myMap){
        if(key===value){
            output.push(value);
        }
    }
    if(output.length===0){
        return -1;
    }
    let max=0;
    for(let i=0;i<output.length;i++){
        if(output[i]>max){
            max=output[i];
        }
    }
    return max;
    
    
};
console.log(findLucky([1,2,2,3,3,3]));