function shortestPath(graph, start, target) {
    const queue = [[start, [start]]]; // Queue stores [currentNode, pathSoFar]
    const visited = new Set([start]); // Set to track visited nodes

    while (queue.length > 0) {
        const [currentNode, pathSoFar] = queue.shift();  //dequeue and take the first element of queue 

        if (currentNode === target) { //check if the first element is equal to the target element
            return pathSoFar; // Return the shortest path found
        }

        for (const neighbor of graph[currentNode]) { // if current node is not equal to the  first element, iterate over the neighbors of the element
            if (!visited.has(neighbor)) {
                queue.push([neighbor, [...pathSoFar, neighbor]]);
                visited.add(neighbor);
            }
        }
    }

    return null; // No path found
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const shortestpath = shortestPath(graph, 'A', 'F');
console.log(shortestpath); // Output: ['A', 'C', 'F']
