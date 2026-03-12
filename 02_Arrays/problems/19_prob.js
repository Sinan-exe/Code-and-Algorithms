function candies(candies, extraCandies) {
  let max = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= max);
}

console.log(candies([2, 8, 7], 1));

// expected output:[true, true, true, false, true]
