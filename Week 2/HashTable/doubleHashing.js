class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size= size;
    }

hash1(key){
    let total=0;
    for(let i = 0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total % this.size;
}

hash2(key){
    return 1 + (key.length %(this.size-2))
}

set(key,value){
let index =this.hash1(key)
let step = this.hash2(key)
while(this.table[index] !==undefined && this.table[index][0] !==key){
   index= (index + step ) % this.size
}
this.table[index] = [key,value]
}

display(){
    for(let i= 0;i<this.size; i++){
        if(this.table[i]){
        console.log(`Index ${i}: ${this.table[i][0]} => ${this.table[i][1]}`)
        }
    }
}
}

const table = new Hashtable(20)

table.set('name','Irfaan')
table.set('mane','Nabees')
table.display()