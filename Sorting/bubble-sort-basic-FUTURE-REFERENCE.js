let arr = Array.from({ length: 20}, () => Math.floor(Math.random() * 20))
// console.log(arr);
var array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap helper function
swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// SOLUTION-1 - Necessary warning :) :) - this is a super basic implementation  to understand the principle behind bubble sort (going through all comparisons) but there's huge room for performance improvement on this.

bubbleSortBasicAscending = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortBasicAscending(array1));

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

/* SOLUTION - 2 - A more optimal solution, by reducing some of the loop execution are not done in this solution.
So, here, I only do the loops and swaps for the cases when I find a mis-placed element, i.e. larger-element placed before smaller in an ascending sort
*/
bubbleSortAscending = arr => {

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


console.log(bubbleSortAscending(array1));