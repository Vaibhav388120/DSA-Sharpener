// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

var MyStack=function(){
    this.queue=[];
}
MyStack.prototype.push=function(x){
    return this.queue.push(x);
}

MyStack.prototype.pop=function(){
    const temp=[];
    let n=this.queue.length;
    while(--n){
        temp.push(this.queue.shift());
    }
    const ans=this.queue.shift();
    this.queue=temp;
    return ans;
}
MyStack.prototype.peek=function(){
    const temp=[];
    let n=this.queue.length;
    while(--n){
        temp.push(this.queue.shift());
    }
    const ans=this.queue.shift();
    temp.push(ans);
    this.queue=temp;
    return ans;
}
MyStack.prototype.empty=function(){
    return this.queue.length===0;
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */