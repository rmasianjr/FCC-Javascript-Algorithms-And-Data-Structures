/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
*/

/* Return Largest Numbers in Arrays */

function largestOfFour(arr) {
  return arr.map(arrSet => {
    let large = arrSet[0];
    arrSet.forEach(item => {
      if (item > 0) {
        large = item;
      }
    });
    return large;
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
