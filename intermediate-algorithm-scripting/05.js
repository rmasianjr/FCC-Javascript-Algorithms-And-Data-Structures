/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/

/* Spinal Tap Case */

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s|_/g, '-')
    .toLowerCase();
}

// spinalCase('This Is Spinal Tap');
// spinalCase('The_Andy_Griffith_Show');
spinalCase('thisIsSpinalTap');
