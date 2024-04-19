///Add a node at the beginning of the list  : prepend data////

class Node {
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size= 0;
    }
isEmpty() {
    return this.size ===0;
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

print(){

    if(this.isEmpty()){
        console.log('List is empty')
    }else{
  let current = this.head;
  let listValues ='';

  while(current){
    listValues += ` ${current.data}`;
    current = current.next;
  }
  console.log(`  ${listValues}`)
}
}
}

const list = new linkedList()

list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()
