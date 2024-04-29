const set = new Set([1,2,3])


set.add(4)
console.log(set.has(2))
set.delete(2)
console.log('size :'+ set.size)
 for(let item of set){
    console.log(item)
 }