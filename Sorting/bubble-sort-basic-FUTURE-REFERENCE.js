/* When people first start learning sorting algorithms, they usually learn the bubble sort algorithm first, because it is the simplest of all the sorting algorithms. However, it is one of the worst-case sorting algorithms with respect to runtime. The bubble sort algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one. It has this name because the items tend to move up into the correct order, like bubbles rising to the surface.
bubble-sort should not be used for larger arrays, can be used for smaller ones for its simplicity.


MOST IMPORTANT POINT OF BUBBLE SORT (And base of my solution SOLUTION-3 ) :-

A> After the whole first pass is done, (i.e. after the first for loop for i = 0 is run , which also means, for each of i = 0 all the values of the nested for loop for j = 0 to j = arr.length - 1 is run) - The

See this for pictorial representation - http://codingmiles.com/sorting-algorithms-bubble-sort-using-javascript/

B> In other words, after the first pass, the biggest elements is placed at its correct position.

C) And this IS THE PRINCIPLE BASED ON WHICH I CAN IMPROVE THE ALGO BY REDUCING THE NO OF PASSES FOR THE INNER NESTED FOR LOOP EACH TIME - Meaning, for the second loop of i = 1 pass, I actually no more have to compare the right-most element. As I know the right-most element is the biggest and has been placed at its correct right-most position.

D) Then for for the next loop i=2, I can reduce the no of comarison for the nested for loop by 2, because I know, that the biggest 2 element has already been placed to the farthest right side.

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
// Learning JavaScript Data Structures and Algorithms-Loiane.pdf - Page - 225

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

And each time there's something to swap the do-while loop will continue, and the moment the whole array is sorted, and there's nothing more to sort the do-while loop will no more execute.
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

/* SOLUTION-3 - Although complexity is still O(n^2). If we subtract the number of passes from the inner loop, we will avoid all the unnecessary comparisons made by the inner loop.  So the idea is, for second nested loop when j = 1, I running it one less pass.

Even though we made this small change to improve the bubble sort algorithm a little bit, it is not a recommended algorithm. It has a complexity of O(n2).

Learning JavaScript Data Structures and Algorithms-Loiane.pdf - Page - 228
*/

bubbleSortAscending_Improved_2 = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0 ; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, arr[j], arr[j+1])
            }
        }
    }
    return arr;
}

console.log(bubbleSortAscending_Improved_2(array1));
