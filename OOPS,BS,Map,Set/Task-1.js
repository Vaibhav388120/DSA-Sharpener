class Student{
    constructor(n="john",roll=2){
        this.name=n;
        this.roll_no=roll;
    }
}

var x=new Student("vaibhav",101);
console.log(x.name)

var y=new Student("rahul",102);
console.log(y.name)

var z=new Student();
console.log(z.name)