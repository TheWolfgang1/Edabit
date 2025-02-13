// Find the Smallest and Biggest Numbers
function minMax(arr) {
	arr.sort(function(a, b){return(a - b)})
	return [arr[0], arr[arr.length - 1]]
	
}

// Sum of Cubes
function sumOfCubes(nums) {
	var cubeSum = 0;
	for (i in nums){
	cubeSum += nums[i]*nums[i]*nums[i];	
	}
	return cubeSum
}

// Filter out Strings from an Array
function filterArray(arr) {
	var filteredArray = arr.filter(item => typeof item === "number");
	return filteredArray
}

// Is the Number Symmetrical ?
let isSymmetrical = num => {
    let arr = String(num).split('').reverse();
    if (num === Number(arr.join(''))){return true}
    return false
}

// Special Array
function isSpecialArray(arr) {
	return arr.every((n, i) => n % 2 === i % 2);
}

// How much is True ?
function countTrue(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count++;
		}
	}
	return count;
}

//Convert Key, Values in an Object to Array
function objectToArray(obj) {
	const myArray = Object.entries(obj);
	return myArray;
}

// Array of multiples
const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}

// 25-Miles Marathon
function marathonDistance(d){
	return d.reduce((acc, cur) =>acc + Math.abs(cur) ,0) == 25;
}

// Square every digit
const squareDigits = n => +((''+n).replace(/./g, v => v*v));