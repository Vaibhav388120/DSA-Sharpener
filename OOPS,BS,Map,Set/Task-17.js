// Given an integer n, return the number of prime numbers that are strictly less than n.

var countPrimes=function(n){
    let primes=new Array(n+1).fill(1);
    let count=0;
    for(let i=2;i<n;i++){
        if(primes[i]===1){
            count++;
        }
        for(let j=i*i;j<=n;j+=i){
            primes[j]=0;
        }
    }
    return count;
}
console.log(countPrimes(10));