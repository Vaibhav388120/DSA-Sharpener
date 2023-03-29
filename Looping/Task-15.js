// Print the following pattern using while loop
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
    for(let j=i;j<=5;j++){
        str=str+"*";
    }
    for(let k=6;k<=i;k++){
        str=str+"*";
    }
    console.log(str);
}