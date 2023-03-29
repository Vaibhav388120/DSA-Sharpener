// Print the following pattern using for loops
// *****
// ****
// ***
// **
// *

for(let i=1;i<=5;i++){
    let str="";
    for(let j=5;j>=i;j--){
        str=str+"*";
    }
    console.log(str);
}