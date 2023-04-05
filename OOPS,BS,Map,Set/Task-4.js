class Employee{
    constructor(n,y,a){
        this.name=n;
        this.year_of_joining=y;
        this.address=a;
    }
    print_details(){
        console.log(`${this.name} ${this.year_of_joining} ${this.address}`);
    }
}

var t=new Employee("ram",1992,"Bangalore");
t.print_details();

var x=new Employee("shyam",2010,"Lucknow");
x.print_details();

var y=new Employee("babu_rao",2015,"Delhi");
y.print_details();