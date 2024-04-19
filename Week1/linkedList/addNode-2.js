///Add a node to the end of the list  : append data////
class Node{
    constructor(data,next){
        this.data = data;
        this.next=null;
    }
}

class linkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

isEmpty(){
    return this.size===0;
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



print(){
    if(this.isEmpty()){
        console.log('List is Empty')
    }else{
    let current = this.head;
    let listValues='';

    while(current){
    listValues += ` ${current.data}`
    current= current.next;
    }
    console.log(`${listValues}`)
}
}

}

const list = new linkedList()

list.print()
list.append(10)
list.print()
list.append(20)
list.append(30)
list.print()
list.delete(30)
list.print()


