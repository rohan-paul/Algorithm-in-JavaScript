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
}

let arr = Array.from({length : 20}, () => Math.floor(Math.random() * 20));
console.log(arr); //printing unsorted array

arr = quicksortLomuto(arr, 0, arr.length - 1);
console.log(arr);


/* Explanation of < Math.floor(Math.random() * (max - min + 1)) + min >

By adding 1, I am making the maximum inclusive ( the minimum is inclusive anyway). Because, the Math.random() function returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1. the formula can generate the correct amount of numbers but they always start at 0 because the range from Math.random starts from 0. https://teamtreehouse.com/community/need-an-explanation

Math.random() returns a number from 0 to 1, not including one. Flooring this number will always result in a zero.

If you multiply this float by the max prior to flooring, you will get numbers all the way up to the maximum, including those below the minimum, but not the maximum itself. Say you have 10 as the maximum, you cannot get a 10.

In order to rule out those below the minimum, you subtract the minimum from the maximum. In order to include the maximum, you add one. This is all multiplied by the random floating point number between 0 and 1.

At that point, we aren't quite there. You will be receiving numbers based on the range between the minimum and maximum as explained above. Adding the minimum back in, post-randomizing, ensure that you have numbers that are between the minimum and the maximum.

TLDR: The range of numbers (i.e. the number of numbers between min and max) is defined by those within the floor method's parentheses. The minimum added at the end ensures these numbers are between the desired minimum and maximum.

By subtracting the minimum number from the maximum, you define the range. Say you have minimum of 5 and a maximum of 20, you will get the range of 15. There are 15 possible numbers that you could select at random between these bounds.

Paul-Note - So, if I dont add Min of 5, the formulae will give me all the random numbers between 0 and 15. But I want between 5 and 20. So thats why I add back the min.

Another great visual explanation at - https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
