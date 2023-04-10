// Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

const rowWithMax1s=function(arr, n, m){
    // code here
    let count,max=0,result=-1;
    for(let i=0;i<n;i++){
        count=0;
        for(let j=0;j<m;j++){
            if(arr[i][j]===1){
                count++;
            }
        }
        if(count>max){
            max=count;
            result=i;
            
        }
    }
    return result;
}
console.log(rowWithMax1s([[0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]],4,4))