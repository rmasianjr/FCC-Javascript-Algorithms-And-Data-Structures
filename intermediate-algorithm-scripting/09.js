/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/

/* Missing letters */

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const strCode = str.charCodeAt(i);
    const code = str.charCodeAt(0) + i;
    if (strCode !== code) {
      return String.fromCharCode(code);
    }
  }
}

// fearNotLetter('abce');
// fearNotLetter('abcdefghjklmno');
fearNotLetter('abcdefghijklmnopqrstuvwxyz');
