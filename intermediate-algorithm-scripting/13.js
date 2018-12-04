/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
*/

/* Sum All Primes */

function sumPrimes(num) {
  function isPrime(n) {
    if (n < 2) {
      return false;
    }

    let limit = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= limit; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// sumPrimes(10);
sumPrimes(977);
