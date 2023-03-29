// By using while loop and continue statement
//Print all number from 1 to n but then it should not be divisible by 5

let n=7;
let i=1;
while(i<=n){
    if(i%5==0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// i=1 1<=n and 1%5!=0 prints 1 i++
// i=2 2<=n and 2%5!=0 prints 2 i++
// when i=5 and 5%5==0 i++ continue statement encounters so next statements will be not executed and next iteration starts
//prints 6 and 7 then