/*
	O(1)  	 - Constant Time
	O(log n) - Logarithmic Time
	O(n) 		 - Liner Time
*/

// findName(large); O(n) Liner Time; 
const boxes = [0, 1, 2, 3, 4, 5]

const logFirstTwoBoxes= (boxes)=>{
	console.log(boxes[0]) //O(1)
	console.log(boxes[1]) //O(1)
}

logFirstTwoBoxes(boxes)