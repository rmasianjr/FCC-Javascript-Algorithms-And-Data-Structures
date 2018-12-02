/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
*/


/* Reverse a String */

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

reverseString('hello');
