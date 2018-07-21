/* When people first start learning sorting algorithms, they usually learn the bubble sort algorithm first, because it is the simplest of all the sorting algorithms. However, it is one of the worst-case sorting algorithms with respect to runtime. The bubble sort algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one. It has this name because the items tend to move up into the correct order, like bubbles rising to the surface.
 */

let arr = Array.from({ length: 20}, () => Math.floor(Math.random() * 20))
// console.log(arr);
var array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap helper function - good old version

// swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

/* Swap helper function using array destructuring, which is a way of initializing variables at once. So, the below code
var [x, y] = ['a', 'b']; is the same as doing the following
var x = 'a';
var y = 'b';
Book- Learning JavaScript Data Structures and Algorithms.pdf // page-40 */

swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

// SOLUTION-1 - Necessary warning :) :) - this is a super basic implementation  to understand the principle behind bubble sort (going through all comparisons) but there's huge room for performance improvement on this.

bubbleSortBasicAscending1 = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortBasicAscending1(array1));

// Now the same solution but starting the nested loop from 0-th index instead of 1 (as above) and going upto (arr.length - 1) instead of arr.length. And so the previous solution, I was comparing < if (arr[j] < arr[j - 1]) > and here I shall compare arr[j + 1] < arr[j] . And thats why I am running the loop upto (arr.length - 1) because inside I will take care of the element arr[j+1]

bubbleSortBasicAscending2 = arr => {

    for (let i = 0; i < arr.length; i++ ) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

console.log(bubbleSortBasicAscending2(array1));

bubbleSortBasicDescending = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortBasicDescending(array1));

/* SOLUTION - 2 - A more optimal solution, by reducing some of the loop execution.
So, here, I only do the loops and swaps for the cases when I find a mis-placed element, i.e. larger-element placed before smaller in an ascending sort
So, here, I traverse the array only once. And only the first time, I find a mis-placed element, that is I do an actual swap, do I make that variable 'swap' to be true.
*/
bubbleSortAscending_Improved = arr => {

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1] && (arr[i] > arr[i + 1])) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped)
  return arr;
}


console.log(bubbleSortAscending_Improved(array1));