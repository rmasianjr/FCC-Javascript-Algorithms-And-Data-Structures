/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
*/

/* Smallest Common Multiple */

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let multiple = max;

  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }

  return multiple;
}

// smallestCommons([1, 3]);
smallestCommons([23, 18]);
