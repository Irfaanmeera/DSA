class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size= size;
    }

    hash(key){
       let total =0;
       for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i)
       }
       return total % this.size;
    }

    set(key,value){
        let index = this.hash(key)
        let step=1
        while(this.table[index]!==undefined && this.table[index][0] !==key){
            index = (index + Math.pow(step,2)) % this.size
            step++;
        }
        this.table[index]= [key,value]
    }
    display(){
        for( let i=0;i<this.size;i++){
            if(this.table[i]){
            console.log(`Index ${i} : ${this.table[i][0]} => ${this.table[i][1]}`)
            }
        }
    }
}

const table = new Hashtable(30)

table.set('name','Irfaan')
table.set('nmae','Nabees')
table.set('mnae','Nabees')
table.display()