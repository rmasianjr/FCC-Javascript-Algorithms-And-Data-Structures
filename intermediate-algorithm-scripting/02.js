/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/

/* Diff Two Arrays */

function diffArray(arr1, arr2) {
  const combineArr = [...arr1, ...arr2];
  return combineArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
