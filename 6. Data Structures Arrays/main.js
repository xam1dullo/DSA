const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');

//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x')

//splice
strings.splice(2, 0, 'alien');

console.log(strings)

/* 
C++
int a[20];
int b[5] = {1, 2, 3, 4, 5}; 
*/

// Array Methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/* 
* push
* pop
* unshift
* splice
* slice
* concat
* join
* indexOf
* lastIndexOf
* reverse
* sort
* forEach
* map
* filter
* reduce
* reduceRight
* every
* some
* find
* findIndex
*/

// Push 
// Add to the end of the array
strings.push('e'); // O(1)

// Pop
// Remove from the end of the array
strings.pop();
strings.pop(); // O(1)

// Unshift
// Add to the beginning of the array
strings.unshift('x'); // O(n)

// Splice
// Add to the middle of the array
strings.splice(2, 0, 'alien'); // O(n/2) -> O(n)

// Slice
// Copy a portion of an array
strings.slice(2, 3); // O(n)

// Concat
// Merge two arrays
strings.concat(numbers); // O(n)

// Join
// Join all elements of an array into a string
strings.join(', '); // O(n)

// IndexOf
// Find the index of an item in the array
strings.indexOf('a'); // O(n)

// LastIndexOf
// Find the last index of an item in the array
strings.lastIndexOf('a'); // O(n)

// Reverse
// Reverse the array
strings.reverse(); // O(n)

// Sort
// Sort the array
strings.sort(); // O(n * log(n))

// ForEach
// Iterate over an array
strings.forEach(function (string, index) {
  console.log(string, index);
}); // O(n)

// Map
// Create a new array by doing something with each item in an array
const mapArray = numbers.map(function (number) {
  return number * 2;
}); // O(n)

// Filter
// Create a new array by keeping the items that return true
const filterArray = numbers.filter(function (number) {
  return number > 2;
}); // O(n)

// Reduce
// Accumulate a value by doing something to each item in an array
const reduceArray = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0); // O(n)

// Every
// Check if every item in an array returns true
const everyArray = numbers.every(function (number) {
  return number > 2;
}); // O(n)

// Some
// Check if some item in an array returns true
const someArray = numbers.some(function (number) {
  return number > 2;
}); // O(n)

// Find
// Return the first item in an array that matches
const findArray = numbers.find(function (number) {
  return number > 2;
}); // O(n)

// FindIndex
// Find the index of the first item in an array that matches
const findIndexArray = numbers.findIndex(function (number) {
  return number > 2;
}); // O(n)



class myArray {
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

const newArray = new myArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(0);
console.log(newArray);
console.log(newArray.get(0));
newArray.shiftItems(0); 
console.log(newArray);