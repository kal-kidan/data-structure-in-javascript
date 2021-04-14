class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let removedHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return removedHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index);
        if (!prevNode) {
            return this.unshift(val);
        }
        if (!nextNode) {
            return this.push(val);
        }
        let newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}
let l = new LinkedList()
l.push("python")
l.push("php")
l.push("java")

console.log(l.reverse().next)