class Queue{
    constructor(){
        this.items={},
        this.rear =0;
        this.front=0;
    }
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek(){
        return this.items[this.front]
    }

    isEmpty(){
        return this.rear- this.front===0;
    }

    size(){
        return this.rear-this.front;
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
console.log(queue.size())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.size())
