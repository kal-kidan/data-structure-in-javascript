class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
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
    get(key) {
        let index = this._hash(key);
        let values = this.keyMap[index];
        if (values) {
            for (let i = 0; i < values.length; i++) {
                if (values[i][0] === key) {
                    return values[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            const items = this.keyMap[i];
            if (items) {
                for (let j = 0; j < items.length; j++) {
                    const element = items[j];
                    if (!keys.includes(element[0]))
                        keys.push(element[0])
                }
            }

        }
        return keys;
    }
    values() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            const items = this.keyMap[i];
            if (items) {
                for (let j = 0; j < items.length; j++) {
                    const element = items[j];
                    if (!values.includes(element[1]))
                        values.push(element[1])
                }
            }

        }
        return values;
    }
}