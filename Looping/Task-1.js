// Write a program using only while loops to print all the even numbers from 1 to n

let n=10;
let i=1;
while(i<=n){
    if(i%2===0){
        console.log(i);
    }
    i++;
}

// i=1 false i++
// i=2 i%2==0 true prints 2 i++
//i=3 false false i++
//i=4 i%2==0 true prints 4 i++
// so on till i less than or equal to n

//T.C- O(N)
//S.C-O(1)

//2nd approach

let j=2;
while(j<=n){
    console.log(j);
    j+=2;
}

//T.C-O(log base 2 n)
//S.C-O(1)
