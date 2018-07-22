	// First write the swap function, which is just a helper function to swap values of the array.
	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	function quicksortHoare(array, left, right) {
		// left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
		left = left || 0;
		right = right || array.length - 1;

		var pivot = partitionHoare(array, left, right);

		if (left < pivot - 1) {
			quicksortHoare(array, left, pivot - 1);
		}

		if (right > pivot) {
			quicksortHoare(array, pivot, right)
		}

		return array;

	}

	/* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped.
	Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair.

	That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
	*/
	function partitionHoare(array, left, right) {
		var pivot = Math.floor((left + right) / 2);

		while (left < right) {
			while (array[left] < array[pivot]) {
				left++
			}
			while (array[right] > array[pivot]) {
				right--
			}

			if (left <= right) {
				swap(array, left, right);
				left++
				right--
			}
		}
		return left;
	}



	/******************* Testing Hoare algorithm *********************/


	let arr = Array.from({length : 20}, () => Math.floor(Math.random() * 20));
	console.log(arr); //printing unsorted array

	arr = quicksortHoare(arr, 0, arr.length - 1);
	console.log(arr);