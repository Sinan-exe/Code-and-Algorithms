// function sum(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   return n + sum(n - 1);
// }

// console.log(sum(3));

// Here the space complexity is O(n) because the memory spcae stack increases as the n increases.

function pairSumSequence(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total = total + sum(i, i + 1);
  }

  return total;
}

function sum(j, k) {
  return j + k;
}

console.log(pairSumSequence(3));

// This function takes the space complexity of O(1) because in space stack the sum function does not load up it comes executes and goes .
