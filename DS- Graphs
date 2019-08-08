//Graphs, vertex, edge
class Graph{
    constructor(){
        this.adjacencylist = {};
    }


    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = [];
        }
    }

    addEdge(v1, v2){
        this.adjacencylist[v1].push(v2);
        this.adjacencylist[v2].push(v2);
    }

    removeEdge(v1, v2){
        this.adjacencylist[v1] = this.adjacencylist[v1].filter(
        v=>v !== v2);

        this.adjacencylist[v2] = this.adjacencylist[v2].filter(
        v=>v !== v1);
        
    }

    removeVertex(vetrex){
        while(this.adjacencylist[vertex].length){
            const adjacentVertex = this.adjacencylist[vertex].pop();
            removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencylist[vertex];

    }

    DFSRecursive(start){
        const result =[];
        var visited = {};
        var adjacencylist = this.adjacencylist;

        (function helper(vertex){
        if (vertex === null){return null;}
            visited[vertex] = true;
            results.push(vertex);

            adjacencylist[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return helper(neighbor);
                }
            })

        })(start)

        return result;
    }


    DSFIterative(start){
        const stack = [start];
        const result =[];
        var visited = {};
        visited[start] = true;

        while(stack.length){
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencylist[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]){
                    visited[neighbor]= true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }


    BFS(start){

        const queue = [starte];
        const result =[];
        const visited = {};
        visited[start]= true;
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencylist[currentVertex].forEach(neighbour => {

                if(!visited[neighbor]){
                    visited[neighbor]= true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}
