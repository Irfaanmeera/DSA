class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size= size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
  set(key,value){
    let index= this.hash(key)
    let step=2
    while(this.table[index] !==undefined && this.table[index][0]!==key){
        index= (index+Math.pow(step,2)) % this.size
        step++;
    }
    this.table[index] = [key,value]
  }

  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]

    if(bucket){
        const sameKeyItem = bucket.find((item)=>item[0]===key)
        if(sameKeyItem){
           return sameKeyItem[1]
        }else{
          this.table[index]
        }
    }
  }
  display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
        console.log(`Index ${i} : ${this.table[i]}`)
        }
    }
  }

}

const table = new Hashtable(20)

table.set('name','Irfaan')
table.set('nmae','Nabees')
table.set('nmea','Nabees')
console.log(table.get('nmae'))
table.display()