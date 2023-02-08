# **_Data Structures_**

### **_What is an Hash Table?_**

```
[] Hash Table is a data structure that stores data in an associative manner.
[] It is a collection of key-value pairs.
[] It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

```

-   Hash Table is a data structure that stores data in an associative manner.

*   It is a collection of key-value pairs.
*   It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

| Key | Value  |
| --- | ------ |
| 0   | Julian |
| 1   | Alex   |
| 2   | Bob    |
| 3   | Kevin  |
| 4   | Rob    |

| Name          | Time Complexity |
| ------------- | --------------- |
| lookup        | O(1)            |
| insert        | O(1)            |
| delete        | O(1)            |
| search        | O(1)            |
| \*can be O(n) |

### Hash Table

```javascript
const hash = (key, arrayLen) => {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
};

console.log(hash('pink', 10)); // 0
console.log(hash('orangered', 10)); // 7
console.log(hash('cyan', 10)); // 3
```

### Hash Table with Separate Chaining

```javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable();
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log(ht.get('maroon')); // #800000
console.log(ht.get('yellow')); // #FFFF00
console.log(ht.get('olive')); // #808000
console.log(ht.get('salmon')); // #FA8072
console.log(ht.get('lightcoral')); // #F08080

console.log(ht.keys()); // [ 'maroon', 'yellow', 'olive', 'salmon', 'lightcoral' ]
console.log(ht.values()); // [ '#800000', '#FFFF00', '#808000', '#FA8072', '#F08080' ]
```

### Hash Table

-   Fast lookups
-   Fast inserts
-   Fast deletes
-   But slow key iteration
-   Unordered
-   Fexible keys
