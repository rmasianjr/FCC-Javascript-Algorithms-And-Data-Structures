/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
*/

/* Steamroller */

function steamrollArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(steamrollArray(curr));
    }
    return [...acc, curr];
  }, []);
}

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
