class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let firstNode = this.first;
            this.first = newNode;
            newNode.next = firstNode;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return false;
        let temp;
        if (this.size === 1) {
            temp = this.first;
            this.first = null;
            this.last = null;
        } else {
            temp = this.first;
            this.first = this.first.next;
        }
        --this.size;
        return temp.val;
    }
}

let stack = new Stack();
stack.push("hi");
stack.push("hello");
console.log(stack.pop())
console.log(stack.pop())