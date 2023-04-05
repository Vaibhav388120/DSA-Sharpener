class Student{
    constructor(n="john",roll=2){
        this.name=n;
        this.roll_no=roll;
    }
    display(){
        console.log(this.name);
        console.log(this.roll_no);
    }
}

var x=new Student("vaibhav",101);
var y=new Student("rahul",102);
var z=new Student();
x.display();
y.display();
z.display();
