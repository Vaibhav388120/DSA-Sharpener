//Print the following pattern using for loop
// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

for(let i=1;i<=10;i++){
    let str="";
    for(let j=5;j>=i;j--){
        str=str+"*";
    }
    for(let k=6;k<=i;k++){
        str=str+"*";
    }
    console.log(str);
}