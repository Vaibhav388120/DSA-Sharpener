class Employee{
    getInfo(sal,work){
        this.salary=sal;
        this.working_hours=work;
    }
    AddSal(){
        if(this.salary<500){
            this.salary+=10;
        }
    }
    AddWork(){
        if(this.working_hours>6){
            this.salary+=5;
        }
    }
}

var t=new Employee();
t.getInfo(400,7);
t.AddSal();
t.AddWork();
console.log(t.salary);
var x=new Employee();
x.getInfo(600,8);
x.AddSal();
x.AddWork();
console.log(x.salary);