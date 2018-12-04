/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
*/

/* Drop it */

function dropElements(arr, func) {
  for (let i = 0; i <= arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

// dropElements([1, 2, 3], function(n) {
//   return n < 3;
// });

dropElements([1, 2, 3, 9, 2], function(n) {
  return n > 2;
});
