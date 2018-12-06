/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker 
*/

/* Palindrome Checker */

function palindrome(str) {
  const cleanStr = str.replace(/\W|_/gi, '');
  const reversed = cleanStr
    .split('')
    .reverse()
    .join('');

  return cleanStr.toLowerCase() === reversed.toLowerCase();
}

// palindrome('eye');
// palindrome('0_0 (: /- :) 0-0');
// palindrome('A man, a plan, a canal. Panama');
// palindrome('almostomla');
palindrome('My age is 0, 0 si ega ym.');
