class Node{
    constructor(data,next){
        this.data = data;
        this.next= null;
    }
}

class LinkedList{
    constructor(head,size){
        this.head = null;
        this.size =0;
    
    }


 append(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode;
    }else{
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next=newNode;
    }
   
 }

 //delete a node with specified value
 delete(data) {
    if (!this.head) {
        return;
    }

    // Handling the case where the node to be deleted is the head node
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    let previous = null;

    // Traverse the linked list to find the node with the specified data value
    while (current && current.data !== data) {
        previous = current;
        current = current.next;
    }

    // If the node with the specified data value is found
    if(current){
        // Adjust pointers to skip over the current node
        previous.next = current.next;
    }
}

//delete a node at the middle of linked list
deleteMiddle(){
    if(!this.head){
       console.log('LIst is Empty')
       return;
    }

    let fast=this.head;
    let slow = this.head;
    let previous = null;

    while(fast && fast.next){
        fast = fast.next.next;
        previous = slow;
        slow= slow.next;
    }
    previous.next = slow.next;
}

//deleteIndex
deleteIndex(index){
    let removedNode;
    if(index===0){
        removedNode=this.head;
        this.head = this.head.next;
    }else{
    let previous=this.head;

    for(let i=0;i<index-1;i++){
        previous= previous.next;
    }
    removedNode = previous.next;
    previous.next = removedNode.next;
}
return removedNode;

}

//print the list
 print(){
    if(!this.head){
        console.log('List is empty')
    }else{
        let current = this.head;
        let result ='';

        while(current){
            result += `${current.data} ->`
            current= current.next;
        }

        console.log(result)
    }
 }
}




const list = new LinkedList()

list.print()
list.append(10)
list.print()
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.deleteMiddle()
list.print()
list.deleteIndex(1)
list.print()



