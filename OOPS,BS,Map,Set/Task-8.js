class PARENT{
    print(){
        console.log("this is a parent class");
    }
}
class CHILD extends PARENT{
    print(){
        console.log("this is a child class");
        super.print();
    }
}

var obj_parent = new PARENT();
obj_parent.print();

var obj_child = new CHILD();
obj_child.print();