/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
*/

/* Seek and Destroy */

function destroyer(arr) {
  const [initialArray, ...rest] = [...arguments];
  return initialArray.filter(num => rest.indexOf(num) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
