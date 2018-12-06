/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher 
*/

/* Caesars Cipher */

function rot13(str) {
  return str
    .split('')
    .map(letter => {
      let code = letter.charCodeAt(0);
      if (code >= 65 && code <= 77) {
        return String.fromCharCode(code + 13);
      } else if (code > 77 && code <= 90) {
        return String.fromCharCode(code - 13);
      } else {
        return letter;
      }
    })
    .join('');
}

// Change the inputs below to test
// rot13('SERR PBQR PNZC');
// rot13('SERR YBIR?');
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
