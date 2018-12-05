/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
*/

/* Arguments Optional */

function addTogether() {
  const argsArray = [...arguments];
  const isNumber = argsArray.every(item => typeof item === 'number');

  function add(n) {
    if (typeof n === 'number') {
      return argsArray[0] + n;
    } else {
      return undefined;
    }
  }

  if (!isNumber) {
    return undefined;
  } else if (isNumber && argsArray.length > 1) {
    return argsArray[0] + argsArray[1];
  } else {
    return add;
  }
}

// addTogether(2, 3);
// addTogether('http://bit.ly/IqT6zt');
// addTogether(2, '3');
// addTogether(2)([3]);
addTogether(2)(3);
