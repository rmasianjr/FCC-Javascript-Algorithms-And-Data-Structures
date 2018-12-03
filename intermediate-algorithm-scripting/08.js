/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
*/

/* DNA Pairing */

function pairElement(str) {
  return str.split('').map(item => {
    if (item === 'G') {
      return [item, 'C'];
    } else if (item === 'C') {
      return [item, 'G'];
    } else if (item === 'A') {
      return [item, 'T'];
    } else if (item === 'T') {
      return [item, 'A'];
    }
  });
}

let x = pairElement('GCG');
console.log(x);
