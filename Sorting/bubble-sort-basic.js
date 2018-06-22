let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 20))
console.log(arr);

// swap helper function
swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Necessary warning :) :) - this is a super basic implementation  to understand the principle behind bubble sort (going through all comparisons) but there's huge room for performance improvement on this.

bubbleSortBasicAscending = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j-1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortBasicAscending(arr));

bubbleSortBasicDescending = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[j - 1]) {
        swap(arr, j, j-1);
      }
    }
  }
  return arr;
}

console.log(bubbleSortBasicDescending(arr));