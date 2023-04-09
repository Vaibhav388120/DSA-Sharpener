class Queue{
    constructor(n){
        this.size=n;
        this.queue=[];
        this.front=-1;
        this.rear=-1;
    }
    enqueue(element){
        if(this.rear===this.size-1){
            return false;
        }
        if(this.front===-1){
            this.front=0;
        }
        this.rear++;
        this.queue[this.rear]=element;
    }
    dequeue(){
        if(this.rear===-1){
            return false;
        }
        const removed=this.queue.shift();
        this.front++;
        return removed;
    }
    is_empty(){
        return this.queue.length===0;
    }
    get_first_element(){
        return this.queue[this.front];
    }
}

let queue=new Queue(3);

queue.enqueue(1);

queue.enqueue(2);

queue.enqueue(3);

const isEmpty=queue.is_empty();

console.log(isEmpty);

const firstElement=queue.get_first_element();

console.log(firstElement);

const removed=queue.dequeue();

console.log(removed);

console.log(queue);