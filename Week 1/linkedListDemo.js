class Node{
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head,size){
        this.head= null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }

    prepend(data){
        const newNode = new Node(data)
        if(!this.head){
             this.head = newNode; 
        }else{
            newNode.next= this.head;
            this.head= newNode;
        }
        this.size++;
    }
append(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode;
    }else{
        let current= this.head;

        while(current.next){
            current = current.next;
        }
           current.next= newNode;
           newNode.next=null;
    }
}

insertBefore(data,newData){
   const newNode = new Node(newData)
   let current= this.head;
   let prev = null;

   while(current && current.data!==data){
    prev=current;
    current = current.next;

   }
   newNode.next= current;
   prev.next= newNode;

}

insertAfter(data,newData){
    const newNode= new Node(newData)
    if(this.head && this.head.data===data){
        newNode.next= this.head;
        this.head= newNode;
    }else{
        let current = this.head;

        while(current && current.data !==data){
            current= current.next;
        }
        newNode.next= current.next;
        current.next= newNode;
    }
}

insertAt(index,data){
    const newNode = new Node(data)
    if(index===0){
        this.prepend(data)
    }else{
        let prev = this.head;

        for(let i=0;i<index-1;i++){
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next=newNode;
    }
}


deleteAt(index){
    if(index===0){
        this.head = this.head.next;
    }else{
        let removedNode;
        let prev = this.head;
           for(let i=0;i<index-1;i++){
            prev = prev.next
           }
        removedNode=prev.next
        prev.next= removedNode.next;

    }
   
}

deleteMiddle(){

    let slow= this.head;
    let fast= this.head;
    let prev = null;

    while(fast && fast.next){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
       
    }
    prev.next = slow.next;
}

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let current= this.head;
            let result ='';

            while(current){
                result += `${current.data}->`
                current= current.next
            }
            console.log(result)
        }
    }
}

const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.append(89)
list.insertBefore(40,90)
list.insertAfter(30,56)
list.insertAt(3,45)
list.deleteAt(3)
list.deleteMiddle()
list.print()