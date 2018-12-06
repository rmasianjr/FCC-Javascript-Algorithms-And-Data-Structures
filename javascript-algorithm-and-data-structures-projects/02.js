/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/

/* Roman Numeral Converter */

function convertToRoman(num) {
  const romanMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  let romanNumeral = '';
  const numericalArr = Object.keys(romanMap).sort((a, b) => b - a);

  for (let i = 0; i <= numericalArr.length; i++) {
    while (numericalArr[i] <= num) {
      romanNumeral += romanMap[numericalArr[i]];
      num -= numericalArr[i];
    }
  }

  return romanNumeral;
}

// convertToRoman(36);
// convertToRoman(649);
convertToRoman(3999);
