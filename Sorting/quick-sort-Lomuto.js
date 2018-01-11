// First write the swap function, which is just a helper function to swap values of the array.
function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function quicksortLomuto(array, left, right) {
	// left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
	left = left || 0;
	right = right || array.length - 1;

	var pivot = partitionLomuto(array, left, right);

	if (left < pivot - 1) {
		quicksortLomuto(array, left, pivot - 1);
	}

	if (right > pivot) {
		quicksortLomuto(array, pivot - 1, right)
	}

	return array;
}

function partitionLomuto(array, left, right) {
	// Lomuto algorithm always uses the last element, array[right], for the pivot.
	var pivot = right;
	var i = left;

	/*The logic under Lomuto is, we start from the leftmost element and keep track of index of smaller (or equal to) elements as j. While traversing, if we find a smaller element, we swap current element with arr[j]. Otherwise we ignore current element.*/
	for (var j = left; j < right; j++) {
		if (array[j] <= array[pivot]) {
			swap(array, i, j);
			i++
		}
	}
	swap(array, i, j);
	return i;
}

/******************* Testing Lomuto algorithm *********************/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	// By adding 1, I am making the maximum inclusive ( the minimum is inclusive anyway). Because, the Math.random() function returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1
}

var arr = [];

for (var i = 0; i < 10; i++) { //initialize a random integer unsorted array
	arr.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(arr); //printing unsorted array

arr = quicksortLomuto(arr, 0, arr.length - 1);
console.log("Sorted array: ");
console.log(arr);