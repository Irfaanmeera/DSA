class Node{
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail=null;

    }
enqueue(data){
    const newNode = new Node(data)
    if(this.tail===null){
      this.head= newNode;
      this.tail = newNode;
      return;
    }else {
        this.tail.next = newNode;
        }
    
    this.tail=newNode
}

print(){
    let current = this.head;
    let resultQueue =[]
    while(current){
        resultQueue.push(current.data)
        current = current.next;
    }
    console.log(resultQueue.join('<-'))
}
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()