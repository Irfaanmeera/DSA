class Node{
    constructor(data,next){
        this.data = data;
        this.next= null;
    }
}

class LinkedList{
    constructor(head,size){
        this.head = null;
        this.size=0;
    }
    isEmpty(){
        this.size==0;
    }
//prepend data
    prepend(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head = newNode;
        }else{
                newNode.next= this.head;
                this.head= newNode
            
        }
        this.size++;
    }

    //insert a value at an index
    insert(data,index){
        if(index<0 || index > this.size){
            return;
        }
        if(index===0){
            this.prepend(data)
        }else{
            const newNode = new Node(data)

            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev= prev.next;
            }
            newNode.next = prev.next;
            prev.next= newNode;
            this.size++;
        }
    }


    //insert a value before the specified data
    insertBefore(value,newData){
        const newNode = new Node(newData)

        if(this.head && this.head.data === value){
            newNode.next=this.head;
            newNode= this.head;
        }
         let current = this.head;
         let previous = null;

         while(current && current.data!==value){
            previous= current;
            current = current.next;
         }

         if(current){
            newNode.next = current;
            previous.next= newNode;
         }

    }

    //insert a data after a specified value
    insertAfter(value,newData){
        const newNode = new Node(newData)
        let current= this.head;
        while(current && current.data!==value){
         
            current= current.next;
        }
        if(current){
            newNode.next=current.next;
            current.next=newNode;
        }
    }

//search
search(data){
    if(this.isEmpty()){
        return -1
    }

    let i=0;
    let current = this.head;

    while(current){
        if(current.data === data){
            console.log(i);
        }
        current = current.next;
        i++;
    }

    return -1;
  
}


reverse(){
    let current= this.head;
    let previous = null;

    while(current){
        let next = current.next;
        current.next = previous;
        previous= current;
        current = next;
    }
    this.head = previous;
}

    print(){

    if(this.isEmpty()){
        console.log('List is empty')
    }else{
        let current=this.head;
        let listValues ='';

        while(current){
            listValues += `${current.data} ->`;
            current = current.next

        }
        console.log(listValues)
    }

}
}


const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.insert(40,2)
list.print()
list.insertBefore(20,60)
list.print()
list.insertAfter(30,70)
list.print()
list.search(70)
list.print()
list.reverse()
list.print()



