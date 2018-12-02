/* 
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
*/

/* Find the Longest Word in a String */

function findLongestWordLength(str) {
  let longest = 0;
  str.split(' ').forEach(word => {
    if (word.length > longest) {
      longest = word.length;
    }
  });
  return longest;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
