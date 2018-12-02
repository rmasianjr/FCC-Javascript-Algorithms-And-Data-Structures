/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
*/

/* Falsy Bouncer */

function bouncer(arr) {
  return arr.filter(item => Boolean(item));
}

bouncer([7, 'ate', '', false, 9]);
