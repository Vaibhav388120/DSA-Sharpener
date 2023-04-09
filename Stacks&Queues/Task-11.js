// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implement the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language. 

var MyCircularQueue=function(k){
    this.queue=new Array(k).fill(undefined);
    this.size=k;
    this.front=-1;
    this.rear=-1;
};

MyCircularQueue.prototype.enQueue=function(value){
    if(this.isFull()){
        return false;
    }
    if(this.front===-1){
        this.front=0;
    }
    this.rear=(this.rear+1) % this.size;
    this.queue[this.rear]=value;
    return true;
}

MyCircularQueue.prototype.deQueue=function(){
    if(this.isEmpty()){
        return false;
    }
    if(this.front===this.rear){
        this.front=-1;
        this.rear=-1;
    }
    else{
        this.front=(this.front+1)%this.size;
    }
    return true;
}

MyCircularQueue.prototype.front=function(){
    if(this.isEmpty()){
        return -1;
    }
    return this.queue[this.front];
}
MyCircularQueue.prototype.rear=function(){
    if(this.isEmpty()){
        return -1;
    }
    return this.queue[this.rear];
}
MyCircularQueue.prototype.isEmpty=function(){
    return this.front===-1;
}
MyCircularQueue.prototype.isFull=function(){
    if(this.front===0 && this.rear===this.size-1){
        return true;
    }
    if(this.front===this.rear+1){
        return true;
    }
    return false;
}

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */