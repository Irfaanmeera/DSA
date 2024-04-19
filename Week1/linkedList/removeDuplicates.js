class Node{
    constructor(data,next){
        this.data = data;
        this.next= null;
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

    append(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head= newNode;
        }else{
            let current= this.head;

            while(current.next){
                current =current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

removeDuplicates(){

    if(!this.head){
        return;
    }
    let current = this.head;

    while(current.next){
        if(current.data===current.next.data){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    
}
}

    print(){

        if(this.isEmpty()){
            console.log('List is empty')
        }
        let current= this.head;
        let result = '';

        while(current){
            result += `${current.data} ->`
            current = current.next;
        }
        console.log(result)
    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(30)
list.append(40)
list.append(50)
list.append(50)
list.print()
list.removeDuplicates()
list.print()