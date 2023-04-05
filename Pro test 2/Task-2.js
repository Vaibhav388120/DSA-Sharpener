// We have given an array of students id's. Every student have different id but twins have same id . Task is to find whether twins are present in given array or not.
// Return true if twin is present otherwise false.

var twin=function(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            return true;
        }
        map.set(arr[i],i);
    }
    return false;
}
console.log(twin([1,2,3,1]));