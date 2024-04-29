class Node{
    constructor(data,prev,next){
        this.data= data;
        this.prev= null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(head,tail){
    this.head= null;
    this.tail=null;
}

prepend(data){
    const newNode= new Node(data)
    if(!this.head){
        this.head = newNode;
        this.tail=newNode;
    }else{
        newNode.next= this.head;

        newNode.prev = null;
        
        this.head = newNode;
    }
}

append(data){
    const newNode= new Node(data)
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    }else{

        this.tail.next = newNode;

        newNode.prev = this.tail;

        this.tail= newNode
    }
}


deleteFirst(){
    if(!this.head){
         console.log('List is empty')
    }

    this.head = this.head.next;

    this.head.prev= null;
    
  
}


deleteLast(){
    if(!this.head){
        console.log('List is empty')
    }

    if(!this.head.next){
        this.head=null;
        this.tail=null;
    }
    
    this.tail = this.tail.prev
   
    this.tail.next = null;

}

insert(data,index){
    const newNode = new Node(data)
  if(index===0){
    this.prepend(data)
  }
  let current = this.head;
  for(let i=0;i<index-1;i++){
    current= current.next;
  }
  if(current){
    newNode.next = current.next;
    newNode.prev=current;
    current.next=newNode
    current.next.prev=newNode;
  }

}
print(){
    if(!this.head){
        console.log('List is empty')
    }else{
        let current= this.head;
        let result='';

        while(current){
            result += `<-${current.data} ->`
            current = current.next
        }
        console.log(result)
    }
}

}

const list = new DoublyLinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.append(50)
list.append(60)
list.print()
list.deleteFirst()
list.print()
list.deleteLast()
list.print()
list.insert(67,4)
list.print()



