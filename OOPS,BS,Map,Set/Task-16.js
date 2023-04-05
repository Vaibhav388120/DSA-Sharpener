class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
}

function sort_array(arr,length){
    const sorted=arr.sort((a,b)=>{
        return a.salary=b.salary;
    })
    return sorted;
}
async function readInput() {
    let inputString = '';
    var output=[];
    var input=[];
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
        var length=parseInt(inputArr[0]);
        for(var i =0;i<2*length;i=i+2)
        {
            input.push(new Employee(inputArr[i+1], parseInt(inputArr[i+2])));
        }
        
        output = sort_array(input,length)
        for(var i=0;i<output.length;i++)
        {
            console.log(output[i].name+" "+ output[i].salary);
        }   
        process.exit();
        
    })
    

}
readInput();