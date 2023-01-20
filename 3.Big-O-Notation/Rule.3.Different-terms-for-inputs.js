function compressBoxesTwice(boxes1,boxes2) {
	boxes1.forEach(function(box){ //O(n)
		console.log(box) //O(n)
	})	

	boxes2.forEach(function(box){ //O(n)
		console.log(box) //O(n)
	})	
}
// O(n) + O(n) + O(m) + O(m) -> O(2m +2n) -> n > m ? O(n) : O(m)

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5] //O(1)

function logAllPairsOfArray(boxes) { 
	for (let i = 0; i < boxes.length; i++) {  //O(n) 
		for (let j = 0; j < boxes.length; j++) {  //O(n)
			console.log(`boxes[i]: ${boxes[i]}, boxes[j]: ${boxes[j]} `);  //O(1)
		}
	}
}
logAllPairsOfArray(boxes)

// O(n) * O(n) +O(1) + O(1) --> O(n^2 + 2) --> O(n^2)   


function printAllNumbersThenAllPairSums(numbers){
	console.log('these are the numbers') //O(1)
	numbers.forEach(function(number) {  //O(n)
		console.log(number); //O(n)
	})
	console.log('and these are their sums');  //O(1)

	numbers.forEach(function(firstNumber) {  //O(n)
		numbers.forEach(function(secondNumber) {  //O(n)
			console.log(firstNumber + secondNumber);  //O(n)
		})
	})
}
 // O(1) + O(1) + O(n) + O(n) + O(n) * O(n) --> O(2+2n+ n^2 +n^2) --> O(n + n^2) --> O(n^2) 
