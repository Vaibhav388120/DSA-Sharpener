// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

let n=00000000000000000000000000001011;
let count=0;
for(let i=0;i<32;i++){
    if((n>>i)&1){
        count++;
    }
}
console.log(count);