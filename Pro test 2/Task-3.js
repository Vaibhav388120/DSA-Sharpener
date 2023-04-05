//You have given a array of heights of hills , the Super hill is the hill which is taller than its neighbors hills .
// You have to find the Super hill and return its index if more then one Super hills are there return any one of index .

var super_hill = function(arr) {
    arr[-1]=arr[arr.length]= -2* Number.MAX_VALUE;
    let l=0,h=arr.length-1;
    while(l<=h){
        let mid=Math.floor((l+h)/2);
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid;
        }
        if(arr[mid]<arr[mid-1]){
            h=mid-1;
        }
        else {
            l=mid+1;
        }
    }
 return -1;
};
console.log(super_hill([1,2,3,1]));