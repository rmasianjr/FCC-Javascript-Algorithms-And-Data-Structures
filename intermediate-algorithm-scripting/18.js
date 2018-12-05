/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
*/

/* Everything Be True */

function truthCheck(collection, pre) {
  return collection.every(
    item => item.hasOwnProperty(pre) && Boolean(item[pre])
  );
}

// truthCheck(
//   [
//     { user: 'Tinky-Winky', sex: 'male' },
//     { user: 'Dipsy', sex: 'male' },
//     { user: 'Laa-Laa', sex: 'female' },
//     { user: 'Po', sex: 'female' }
//   ],
//   'sex'
// );

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 }
  ],
  'age'
);
