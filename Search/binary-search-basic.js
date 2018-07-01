// SOLUTION-1

binarySearch = ( arr, value ) => {

  let estimatedIndex, minIndex = 0, maxIndex = arr.length - 1;

  while ( minIndex <= maxIndex ) {

    estimatedIndex = Math.floor((minIndex + maxIndex) / 2);

    if (arr[estimatedIndex] === value ) {
      return estimatedIndex
    }
    else if (arr[estimatedIndex] < value) {
      // then start the next search from middle position towards right
      minIndex = estimatedIndex + 1;
    }
    else {
      // i.e. the value is in the left half, so reduce the maxIndex to 1 less than the middle position
      maxIndex = estimatedIndex - 1
    }
  }
}

console.log(binarySearch([2, 4, 1, 5], 5));