var minStack=function (){
    this.container=[];
    this.minStack=[];
}

minStack.prototype.push=function(val){
    this.container.push(val);
    if(this.minStack.length===0 || val<=this.minStack[this.minStack.length-1]){
        this.minStack.push(val);
    }
}

minStack.prototype.pop=function(){
    let x=this.container.pop();
    if(x===this.minStack[minStack.length-1]){
        this.minStack.pop();
    }
}

minStack.prototype.top=function(){
    return this.container[this.container.length-1];
}

minStack.prototype.getMin=function(){
    return this.minStack[this.minStack.length-1];
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */