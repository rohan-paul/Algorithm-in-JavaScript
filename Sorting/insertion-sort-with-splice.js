/* Algorithm -

A) Loop from i = 1 (second element of the array) to n-1.
B) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]
C) Say I get 12, 11 as the second and third element. Since 11 is smaller than 12, move 12 and insert 11 before 12
*/

insertionSort = arr => {

  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }

  let array = arr.slice(0);


    /* A>  Here each time I find aff[i] < arr[j] I effectively have to swap the position of i and j.
    B> But instead of using a swap function, I returned a spliced array where the j-th position is replaced with i-th position.
    C> Note, < arr.splice(j, 0, 'item')  > means that at j-th position I am placing the 'item' and removing zero element.
    D> And  < arr.splice(i, 1)[0] > will delete 1 element from i-th position and return and return an array containing deleted element. Hence I am getting that delete element by accessing [0]
    */

  for (let i = 1; i < array.length; i++ ) {
    for ( let j = 0; j < i; j++ ) {

      if ( array[i] < array[j] ) {
        array.splice(j, 0, array.splice(i, 1)[0])
        break;
      }
    }
  }
  return array;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list));

// [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]