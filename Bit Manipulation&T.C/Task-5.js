// What is the time complexity of the following code

let a=0;
for(let i=0;i<N;i++){
    for(let j=N;j>i;j--){
        a=a+i+j;
    }
}

//T.C is O(N^2)
