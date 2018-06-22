/*The algorithm for Quicksort is:
1. Pick a pivot element that divides the list into two sublists.

2. Reorder the list so that all elements less than the pivot element are placed before
the pivot and all elements greater than the pivot are placed after it.

3. Repeat steps 1 and 2 on both the list with smaller elements and the list of larger
elements.

4. Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value. After that, recursively perform the same operation on the items before and after the pivot. */

// basic recursive implementation, where pivot is the first element, without using swap function and partition function.

function quickSortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
// Now, recursively perform the same operation on the items before and after the pivot.
  return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray));
}

/******************* Testing Quick sort algorithm *********************/

// Returns a random integer between min (inclusive) and max (inclusive). Using Math.round() will give a non-uniform distribution, which we dont want in this case.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = Array.from({length : 20}, () => Math.floor(Math.random() * 20));

console.log(arr); //printing unsorted array

arr = quickSortBasic(arr, 0, arr.length - 1);
console.log(arr);