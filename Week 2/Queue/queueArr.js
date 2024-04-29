class Queue{
      constructor(){
        this.items =[]
      }
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        this.items.shift()
    }
    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
queue.print()