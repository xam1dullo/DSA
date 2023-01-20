function printFirstItemThenFirstHalfThenSayHi100Times(items){
	console.log(items[0]) //O(1)

	var middleIndex = Math.floor(items.legth/2) //O(1)
	var index = 0 //O(1)

	while(index < middleIndex){ //O(n/2)
		console.log(items[index]); //O(n/2)
		index++ //O(n/2)
	}
	for (var i = 0; i < 100; i++) { //O(100)
		console.log('hi'); //O(100)
	}
}

O(202+ 3n/2)