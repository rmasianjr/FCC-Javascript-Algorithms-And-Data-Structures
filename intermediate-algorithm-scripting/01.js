/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/

/* Sum All Numbers in a Range */

function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
