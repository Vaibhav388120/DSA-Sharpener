// Print the following pattern using while loops

let i=1;
while(i<=5){
    let str="";
    let j=5;
    while(j>=i){
        str=str+"*";
        j--;
    }
    console.log(str);
    i++;
}