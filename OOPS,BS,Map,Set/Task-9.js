class Member{
    constructor(n,a,p,add,sal){
        this.name=n;
        this.age=a;
        this.phone_number=p;
        this.address=add;
        this.salary=sal;
    }
    printSalary(){
        console.log(this.salary);
    }
}

class Employee extends Member{
    constructor(n,a,p,add,sal,spe){
        super(n,a,p,add,sal);
        this.specialization=spe;
    }
    print_details(){
       console.log(this.name);
       console.log(this.specialization); 
    }
}
class Manager extends Member{
    constructor(n,a,p,add,sal,dep){
        super(n,a,p,add,sal);
        this.department=dep;
    }
    print_details(){
       console.log(this.name);
       console.log(this.department);
       super.printSalary(); 
    }
}

var obj = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
obj.print_details();

var obj1 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
obj1.print_details();

var obj_Man = new Manager("babu",100,"1234","Bangalore",1000,"JP");
obj_Man.print_details();

var obj1_Man = new Manager("Rao",250,"456","Kerala",3000,"GC");
obj1_Man.print_details();
