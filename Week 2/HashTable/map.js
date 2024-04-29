const map = new Map([['a',1],['b',1]])

map.set('c',4)
map.has(1)
console.log(map.size)

for(let [key,value] of map){
    console.log(`${key} : ${value}`)
}