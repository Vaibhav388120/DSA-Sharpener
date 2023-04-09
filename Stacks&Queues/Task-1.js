class Stack{
    constructor(n){
        this.stack=[];
        this.size=n;
        this.index=-1;
    }
    push(element){
        if(this.index===this.size-1){
            return false;
        }
        this.index++;
        this.stack[this.index]=element;
    }
    pop(){
        if(this.index===-1){
            return false;
        }
        const popped=this.stack.pop();
        this.index--;
        return popped;
    }
    top(){
        return this.stack[this.index];
    }
}

const stack=new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
const popped=stack.pop();
const top=stack.top();
console.log(popped);
console.log(top);
console.log(stack);
