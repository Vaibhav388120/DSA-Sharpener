for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+"*";
    }
    for(let k=i;k<=4;k++){
        str=str+" ";
    }
    for(let l=1;l<=i;l++){
        str=str+"*";
    }
    console.log(str);
}