/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
*/

/* Sum All Odd Fibonacci Numbers */

function sumFibs(num) {
  let sum = 0;
  let prev = 0;
  let n = 1;

  while (n <= num) {
    if (n % 2 !== 0) {
      sum += n;
    }
    n += prev;
    prev = n - prev;
  }

  return sum;
}

// sumFibs(4);
sumFibs(4000000);
