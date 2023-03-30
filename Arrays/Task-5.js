// After watching the video write the code to print all the subarrays possible.

let arr=[1,2,3,4,5];
let length=arr.length;
for(let i=0;i<length;i++){
    for(let j=i;j<length;j++){
        let str="";
        for(let k=i;k<=j;k++){
            str=str+arr[k];
        }
        console.log(str);
    }
}