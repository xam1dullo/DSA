function funChallenge(input){
	let a = 10; //O(1)
	a = 40 + 3; //O(1)

	for (var i = 0; i < input.length; i++) {  //O(n) n = input.length = liner time
		anotherFunction()  //	O(n)
		let stranger = true;  //O(n)
		a++  //O(n)
	}
	return a;  //O(1)
} 

funChallenge() 

// Big O(3 + n + n + n + n); => O(4n+3) => O(4n) =>O(n)