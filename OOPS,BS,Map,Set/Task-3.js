class Triangle{
    constructor(a,b,c){
        this.side1=a;
        this.side2=b;
        this.side3=c;
    }
    calculate_area(){
        return this.side1*this.side2*this.side3;
    }
    calculate_perimeter(){
        return this.side1+this.side2+this.side3;
    }
}

var t=new Triangle(3,4,5);
console.log(t.calculate_area());
var per=t.calculate_perimeter();
console.log(per);
t=new Triangle(9,10,11);
console.log(t.calculate_area());
per=t.calculate_perimeter();
console.log(per);