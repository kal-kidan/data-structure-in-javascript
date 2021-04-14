class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            let prev = this.tail;
            this.tail = newNode;
            this.tail.prev = prev;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return false;
        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    shift() {
        if (!this.head) return false;
        let removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            removedNode = this.head;
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return false;
        let mid = parseInt(this.length / 2);
        let foundNode;
        if (index <= mid) {
            let current = this.head;
            let count = 0;
            while (current) {
                if (index == count) {
                    foundNode = current;
                    break;
                }
                count++;
                current = current.next;
            }
        } else {
            let current = this.tail;
            let count = this.length - 1;
            while (current) {
                if (index == count) {
                    foundNode = current;
                    break;
                }
                count++;
                current = current.prev;
            }
        }
        return foundNode;
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }

    insert(index, val) {
        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            let prevNode = this.get(index - 1);
            let newNode = new Node(val);
            let nextNode = prevNode.next;
            newNode.next = nextNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            nextNode.prev = newNode;
        }
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        let removedNode;
        if (index === 0) {
            removedNode = this.unshift();
        } else if (index === this.length - 1) {
            removedNode = this.pop();
        } else {
            removedNode = this.get(index);
            let prevNode = removedNode.prev
            let nextNode = removedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

}
let l = new LinkedList();
l.push("kal");
l.push("kidan");
l.push("hello")
l.insert(2, "hi")
console.log(l.remove(2));