/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
*/

/* Search and Replace */

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    const upAfter = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, upAfter);
  }

  return str.replace(before, after);
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace('His name is Tom', 'Tom', 'john');
