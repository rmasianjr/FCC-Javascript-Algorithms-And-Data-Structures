/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
*/

/* Factorialize a Number */

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return factorialize(num - 1) * num;
}

factorialize(5);
