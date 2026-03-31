function steps(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  return steps(n - 1) + steps(n - 2);
}
console.log(steps(4));

// (0, 1, 2, 3, 5, 8, 13);

// function fibVariant(n) {
//   if (n === 0) return 0; // first term
//   if (n === 1) return 1; // second term
//   if (n === 2) return 2; // third term
//   return fibVariant(n - 1) + fibVariant(n - 2); // sum of previous two
// }

// // Generate first 10 terms
// for (let i = 0; i < 10; i++) {
//   console.log(fibVariant(i));
// }
