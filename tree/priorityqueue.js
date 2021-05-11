class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp(newNode);
        return this.values;
    }

    bubbleUp(val) {
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx]
            if (val.priority > parent.priority) {
                this.values[parentIdx] = val;
                this.values[idx] = parent;
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    remove() {
        let end = this.values.pop();
        let idx = 0;
        const element = this.values[0];
        let length = this.values.length
        if (length > 1) {
            this.values[0] = end;
        }
        let rightChild, leftChild;
        while (true) {
            let leftIndex = idx + 1;
            let rightIndex = idx + 2;
            let swap = null;
            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild > element) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if ((rightChild > element && swap == null) || (rightChild > leftChild && swap !== null)) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[idx] = swap;
            this.values[swap] = element;
            idx = swap;
        }
        return element;
    }
}

let priorityQueue = new PriorityQueue();