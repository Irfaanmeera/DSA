class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.stack.length ===0){
            console.log('Stack is Empty')
        }else{
            this.stack.pop()
        }
    }

    peek(){
        if(this.stack.length ===0){
            console.log('Stack is Empty')
        }
            return this.stack[this.stack.length-1]
    
    }

    isEmpty(){
        return this.stack.length=== 0;
    }
sum(){
    let sum=0;
for(let i=0;i<this.stack.length;i++){
    sum += this.stack[i]
}
return sum;
}

    print(){
        if(this.stack.length ===0){
            console.log('Stack is Empty')
        }else{
            for(let i=this.stack.length-1;i>=0;i--){
                console.log(this.stack[i])
            }
        }
    }
}


const stack = new Stack()
stack.push(10)
stack.push(35)
stack.push(89)
stack.push(90)
stack.pop()

stack.print()
console.log(stack.sum())
