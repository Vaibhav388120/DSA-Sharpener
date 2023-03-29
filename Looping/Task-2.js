// Print the following series using while loop
//1 4 9 16 25 36 …. n

let i=1,n=49;
while(i*i<=n){
    console.log(i*i);
    i++;
}

//i=1 i*i=1*1<=n true print 1*1=1 i++
//i=2 i*i=2*2=4<=n true print 2*2=4 i++
//i=3 i*i=3*3=9<=n true print 3*3=9 i++
//so on till i*i<=n