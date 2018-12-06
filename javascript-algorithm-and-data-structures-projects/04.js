/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/
*/

/* Telephone Number Validator */

function telephoneCheck(str) {
  const pattern = /(^1?\s?)((\(\d{3}\))|(\d{3}))(-?|\s?)(\d{3})(-?|\s?)(\d{4})$/;

  return pattern.test(str);
}

// telephoneCheck('555-555-5555');
// telephoneCheck('1 555-555-5555');
// telephoneCheck('1 (555) 555-5555');
// telephoneCheck('5555555555');
// telephoneCheck('555-555-5555');
// telephoneCheck('(555)555-5555');
// telephoneCheck('1(555)555-5555');
// telephoneCheck('1 555 555 5555');
// telephoneCheck('1 456 789 4444');
// telephoneCheck("2(757)622-7382")
telephoneCheck('(555)5(55?)-5555');
