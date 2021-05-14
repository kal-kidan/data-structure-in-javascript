class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertix(vertix) {
        this.adjacencyList[vertix] = [];
    }
    addEdge(vertix1, vertix2, weight) {
        this.adjacencyList[vertix1].push({ node: vertix2, weight });
        this.adjacencyList[vertix2].push({ node: vertix1, weight });
    }
}

let wg = new WeightedGraph();
wg.addVertix("A")
wg.addVertix("B")
wg.addVertix("C")
wg.addEdge("A", "B", 5)
wg.addEdge("B", "C", 10)
wg.addEdge("A", "C", 12)
console.log(wg.adjacencyList['A']);