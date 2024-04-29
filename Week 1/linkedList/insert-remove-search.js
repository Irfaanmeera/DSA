class Node {
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size =0;
    }
    isEmpty(){
      return this.size===0;
    }


    prepend(data){
        const newNode= new Node(data)
    if(this.isEmpty()){
      this.head = newNode;
    }else{
        newNode.next= this.head;
        this.head = newNode;
    }
    this.size++;
    }
    
    append (data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head= newNode;
        }else{
            let prev = this.head;
    
            while(prev.next){
                prev=prev.next; 
            }
            prev.next = newNode;
        }
        this.size++;
    }
    

    insert(data, index) {
    if (index < 0 || index > this.size) {
        return;
    } 
    if (index === 0) {
        this.prepend(data); // Call prepend method with data
    } else {
        const newNode = new Node(data); // Pass the data argument to the Node constructor
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
    }
}

removeFrom(index){
    if(index<0 || index>this.size){
        return null;
    }
    let removedNode
if(index===0){
    removedNode = this.head;
    this.head = this.head.next;
}else{
    let prev = this.head;
    for(let i=0;i<index-1;i++){
        prev= prev.next;
    }
    removedNode= prev.next;
    prev.next = removedNode.next;
    
}
this.size--;
return removedNode;
}


search(data){
    if(this.isEmpty()){
        return -1;
    }
    let i=0;
    let current = this.head;
    
    while(current){
        if(current.data === data){
            return i;
        }
        current= current.next;
        i++;
    }
    return -1;
}

reverse(data){
    let prev = null;
    let current = this.head;

    while(current){
        let next = current.next
        current.next = prev;
        prev = current;
        current = next
    }
    this.head = prev;
}

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let current = this.head;
            let listValues ='';

            while(current){
                listValues += ` ${current.data}`
                current = current.next;
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()

list.print()
list.insert(10,0)
list.print()
list.insert(20,1)
list.insert(30,2)
list.print()

// console.log(list.removeFrom(1))
// list.print()

// console.log(list.search(60))

list.reverse()
list.print()

