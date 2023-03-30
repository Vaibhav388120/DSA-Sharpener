// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

let arr=[[1,5],[7,3],[3,5]];
let max=0;
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[i].length;j++){
        sum=sum+arr[i][j];
    }
    if(sum>max){
        max=sum;
    }
}
console.log(max);