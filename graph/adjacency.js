class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertix(vertix) {
        if (!this.adjacencyList[vertix]) this.adjacencyList[vertix] = [];
    }
    addEdge(vertixOne, vertixTwo) {
        if (!this.adjacencyList[vertixOne] || !this.adjacencyList[vertixTwo]) {
            return false;
        }
        this.adjacencyList[vertixOne].push(vertixTwo);
        this.adjacencyList[vertixTwo].push(vertixOne);
        return true;
    }
    removeEdge(vertixOne, vertixTwo) {
        if (!this.adjacencyList[vertixOne] || !this.adjacencyList[vertixTwo]) {
            return false;
        }
        let vertix;
        for (let i = 0; i < this.adjacencyList[vertixOne].length; i++) {
            vertix = this.adjacencyList[vertixOne][i];
            if (vertix == vertixTwo) {
                this.adjacencyList[vertixOne] = this.adjacencyList[vertixOne].slice(0, i).concat(this.adjacencyList[vertixOne].slice(i + 1, this.adjacencyList[vertixOne] - 1));
            }
        }

        for (let i = 0; i < this.adjacencyList[vertixTwo].length; i++) {

            vertix = this.adjacencyList[vertixTwo][i];

            if (vertix == vertixOne) {
                this.adjacencyList[vertixTwo] = this.adjacencyList[vertixTwo].slice(0, i).concat(this.adjacencyList[vertixTwo].slice(i + 1, this.adjacencyList[vertixTwo] - 1));
            }
        }
        return this.adjacencyList;
    }
}

let g = new Graph();
g.addVertix("tokiyo");
g.addVertix("london");
g.addVertix("addis");
g.addEdge("tokiyo", "london");
g.addEdge("tokiyo", "addis");
console.log(g.removeEdge("tokiyo", "addis"));