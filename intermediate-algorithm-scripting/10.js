/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
*/

/* Sorted Union */

function uniteUnique(...args) {
  const combineArr = args.reduce((acc, curr) => [...acc, ...curr], []);

  return combineArr.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
      return [...acc, curr];
    }
    return acc;
  }, []);
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
