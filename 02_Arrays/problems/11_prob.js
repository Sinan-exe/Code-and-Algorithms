// leetcode 204

// sieve of eratosthenes Algorithm

function isPrime(n) {
  if (n <= 2) return 0;

  let numPrime = new Array(n).fill(true);
  numPrime[0] = numPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (numPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        numPrime[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (numPrime[i]) {
      count++;
    }
  }

  return count;
}

console.log(isPrime(20));
