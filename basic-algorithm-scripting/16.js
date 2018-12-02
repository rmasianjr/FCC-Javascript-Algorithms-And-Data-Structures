/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
*/

/* Chunky Monkey */

function chunkArrayInGroups(arr, size) {
  const chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }

  return chunk;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
