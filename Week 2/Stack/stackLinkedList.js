class Node{
    constructor(data,next){
        this.data = data;
        this.next= null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size=0;
    }

    push(data){
        const newNode =new Node(data)
        if(!this.top){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop(){
        if(!this.top){
            console.log('Stack is Empty')
        }else{
            let poppedValue = this.top.data;
            this.top = this.top.next;
            this.size--;
            return poppedValue;
        }
        
    }

    print(){
        if(!this.top){
            console.log('The stack is empty')
        }else{
            let current=this.top
            let stackedArr =[]

            while(current){
                stackedArr.push(current.data)
                current = current.next;
            }
            console.log(stackedArr.join('->'))
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
stack.print()