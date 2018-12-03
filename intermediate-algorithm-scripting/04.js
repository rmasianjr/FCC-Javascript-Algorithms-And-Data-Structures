/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
*/

/* Wherefore art thou */

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(item => {
    for (const prop in source) {
      if (!item.hasOwnProperty(prop) || item[prop] !== source[prop]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' }
//   ],
//   { last: 'Capulet' }
// );
// whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
// whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });

whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 }
  ],
  { apple: 1, bat: 2 }
);
