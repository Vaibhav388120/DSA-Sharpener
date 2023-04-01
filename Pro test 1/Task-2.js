// You have given array of marks of students .
// A topper is a student whose marks are greater than marks of all the students present at its right .
// The Student at last of array will always a topper , You have to return Marks of all the toppers in array .

let arr=[16,17,4,3,5,2];
for(let i=0;i<arr.length;i++){
    let flag=true;
    for(j=i+1;j<arr.length;j++){
        if(arr[j]>arr[i]){
            flag=false;
        }
    }
    if(flag){
        console.log(arr[i]);
    }
}

