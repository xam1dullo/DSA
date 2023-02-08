# **_Data Structures Algorithms_**

# 3. Big O Notation

# Rule book

    * Rule 1: Worth Case
    * Rule 2: Remove Constants
    * Rule 3: Different terms for inputs
    * Rule 4: Drop Non Dominants

# Big O Cheat Sheet:

-   Big Os

```
 *   O(1) Constant - no loops
 *   O(log N) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
 *   O(n) Linear - for loops, while loops through n items
 *   O(n log(n)) Log Liniear- usually sorting operations
 *   O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two
 *   nested loops
 *   O(2^n) Exponential - recursive algorithms that solves a problem of size N
 *   O(n!) Factorial - you are adding a loop for every element\  *- Iterating through half a collection is still O(n)
 *   Two separate collections: O(a \_ b)
```

# -What can cause time in a function?-

    *   Operations (+, -, \_, /)
    *   Comparisons (<, >, ==)
    *   Looping (for, while)
    *   Outside Function call (function())

### Rule Book

    *  Rule 1: Always worst Case
    *  Rule 2: Remove Constants
    *  Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b) for steps in order for nested steps
    *  Rule 4: Drop Non-dominant terms

### What causes Space complexity?-

    Variables
    Data Structures
    Function Call
    Allocation

# Space Complexity

[Know Thy Complexities!](https://www.bigocheatsheet.com/)

---

## What is good code?

    1. Readable
    2. Scalable

## Which code is best?

    1. Readable
    2. Memory - Space Complexity - Heap and Stack
    3. Speed - Time Complexity

# 4. How To Solve Coding Problems

1. Analytic Skills
2. Coding Skills
3. Technical Skills
4. Communication Skills

```Markdown
    * Data Structures
        * Array
        * Stacks
        * Queues
        * Linked Lists
        * Trees
        * Tties
        * Graphs
        * Hash Tables
    * Algorithms
        * Sorting
        * Dynamic Programming
        * BFS +DFS (Serching)
        * Recursion
```

# 5. Data Structures Introduction

[List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)

## What is a Data Structure?

    1 . How to build One
    2.  How to Use it



    *  CPU - Central processing unit
    *  RAM - Random Access memory
    *  Storage - Storage is something you use to put your stuff in

# 6. Data Structures Arrays

### **_What is an Array?_**

-   Arrays are a data structure that stores values in a contiguous block of memory. Each element in the array is accessed by its index. The index of the first element is 0 and the index of the last element is the length of the array minus 1.

| Index | Value  |
| ----- | ------ |
| 0     | Julian |
| 1     | Alex   |
| 2     | Bob    |
| 3     | Kevin  |
| 4     | Rob    |
| 5     | John   |
| 6     | Mark   |
| 7     | Tom    |

| Name   | Time Complexity |
| ------ | --------------- |
| lookup | O(1)            |
| push   | O(1)            |
| insert | O(n)            |
| delete | O(n)            |

### **_Daynamic Array_**

| Index | Value  |
| ----- | ------ |
| 0     | Julian |
| 1     | Alex   |
| 2     | Bob    |
| 3     | Kevin  |
| 4     | Rob    |
| 5     | John   |
| 6     | Mark   |
| 7     | Tom    |

| Name          | Time Complexity |
| ------------- | --------------- |
| lookup        | O(1)            |
| append        | O(1)            |
| insert        | O(n)            |
| delete        | O(n)            |
| \*can be O(n) |

### Array

```javascript
const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage
// push
strings.push('e'); // O(1)
// pop
strings.pop(); // O(1)
// unshift
strings.unshift('x'); // O(n)
// splice
strings.splice(2, 0, 'alien'); // O(n)
```

### Array

-   Fast lookups
-   Fast push/pop
-   Slow inserts
-   Slow deletes

### Dynamic Array

```javascript
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
```

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
