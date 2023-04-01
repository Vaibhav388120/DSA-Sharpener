//A Teacher wants to revamp the roll numbers of students of his class . The previous roll numbers has a problem that some duplicate roll numbers are present .
// You have given an array of integers which represent roll numbers of students . You have to revamp such that no duplicate roll numbers should be there .
// You can increase the roll number by one at a time . you have to find minimum operation for revamping the array.

let arr=[1,2,2];
let change=0;
for(let i=0;i<arr.length;i++){
    change=change+((i+1)-arr[i])
}
console.log(change);
