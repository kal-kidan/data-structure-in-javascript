class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(53);
    }
    _hash(key) {
        const PRIME_NUMBER = 31;
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let charCode = key[i].charCodeAt(0) - 96;
            total = (total * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
        return this.keyMap;
    }
}

const ht = new HashTable();
ht.set("age", "22");
console.log(ht.set("name", "kalkidan"))