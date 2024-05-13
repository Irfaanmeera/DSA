function DFS(graph, vertex, visited) {
    // Mark the current vertex as visited
    visited[vertex] = true;
    console.log(vertex);

    // Visit all adjacent vertices of the current vertex
    for (let neighbor of graph[vertex]) {
        if (!visited[neighbor]) {
            DFS(graph, neighbor, visited);
        }
    }
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

const visited = {};
DFS(graph, 'A', visited);
