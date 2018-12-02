/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
*/

/* Repeat a String Repeat a String */

function repeatStringNumTimes(str, num) {
  let repStr = '';
  for (let i = 0; i < num; i++) {
    repStr += str;
  }

  return repStr;
}

repeatStringNumTimes('abc', 3);
