function BFS(graph,vertex){
    const queue = [vertex]
    const visited = new Set(vertex)

    while(queue.length){
        let current = queue.shift()
        console.log(current)

        for(let neighbour of graph[current]){
            if(!visited.has(neighbour)){
                queue.push(neighbour)
                visited.add(neighbour)
            }
        }
    }
    return null
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

BFS(graph,'A')