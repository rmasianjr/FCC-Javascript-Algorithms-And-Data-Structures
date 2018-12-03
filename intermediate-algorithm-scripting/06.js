/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
*/

/* Pig Latin */

function translatePigLatin(str) {
  if (/^[aeiou]/.test(str[0])) {
    return str + 'way';
  }

  return str.replace(/([^aeiou]*)([a-z]*)/, '$2$1ay');
}

// translatePigLatin('consonant');
translatePigLatin('glove');
