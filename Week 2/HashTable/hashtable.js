class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size=size;
    }

    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
           total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] =[[key,value]]
        }else{
            const sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
            return sameKeyItem[1]
            }
        }
        return undefined;
    }

    remove(key){
        const  index = this.hash(key)
        const bucket = this.table[index]

        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(30)

table.set('name', 'Irfaan')
table.display()
table.set('mane', 'Meera')
table.display()
table.set('name', 'Nabees')
table.set('age', 25)
console.log(table.get('name'))
table.display()
table.remove('mane')
table.display()
table.remove('age')
table.display()
table.set('age',56)
table.display()