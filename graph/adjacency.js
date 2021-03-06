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

    removeVeritx(vertix) {
        let v;
        while (this.adjacencyList[vertix].length) {
            v = this.adjacencyList[vertix].pop();
            this.removeEdge(v, vertix);
        }
        delete this.adjacencyList[vertix];
        return this;
    }
    dfs(v) {
        let vertixs = [];
        let traverse = (v) => {
            if (!vertixs.includes(v)) {
                vertixs.push(v)
            }
            for (let i = 0; i < this.adjacencyList[v].length; i++) {
                if (!vertixs.includes(this.adjacencyList[v][i])) {
                    traverse(this.adjacencyList[v][i]);;
                }

            }
            return true;
        }
        traverse(v);
        return vertixs;
    }
    dfsRecursive(start) {
        let stack = [start];
        let visited = {};
        let result = [];
        let currentVertix;
        while (stack.length) {
            currentVertix = stack.pop();
            if (!visited[currentVertix]) {
                result.push(currentVertix);
                visited[currentVertix] = true;
            }
            this.adjacencyList[currentVertix].forEach(item => {
                if (!visited[item]) stack.push(item)
            });
        }
        return result;
    }
    bfs(start) {
        let stack = [start];
        let visited = {};
        let result = [];
        let currentVertix;

        while (stack.length) {
            ++howManyTimeItLoops;
            currentVertix = stack.shift();
            if (!visited[currentVertix]) {
                result.push(currentVertix);
                visited[currentVertix] = true;
            }
            this.adjacencyList[currentVertix].forEach(item => {
                if (!visited[item]) stack.push(item)
            });
        }
        return result;
    }

}

// let g = new Graph();
// g.addVertix("tokiyo");
// g.addVertix("london");
// g.addVertix("addis");
// g.addVertix("San Fransisco");
// g.addVertix("california");
// g.addEdge("tokiyo", "london");
// g.addEdge("tokiyo", "addis");
// g.addEdge("San Fransisco", "addis");
// g.addEdge("california", "london");
// console.log(g.bfs("tokiyo"));