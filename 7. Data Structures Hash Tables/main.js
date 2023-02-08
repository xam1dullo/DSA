// Google Question

// Give an array = [1,2,3,4,5,6,6,7]
// it should return 6

const obj = {}
const firstRecurringCharacter = (arr)=>{ //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i]===arr[j]) {
        return arr[i]
      }
    }
  }
}


const firstRecurringCharacter2 = (arr)=>{ //O(n)
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i] 
    } else{
      map[arr[i]] = i
    }
  }
}

console.log(firstRecurringCharacter([1,12,2,3,4,5,6,6,7]));

console.log(firstRecurringCharacter2([1,12,2,3,1,5,6,6,7]));