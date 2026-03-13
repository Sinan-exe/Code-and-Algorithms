function twoSortedSum(numbers, target) {
  let map = new Map();

  for (let i = 0; i <= numbers.length; i++) {
    let compliment = target - numbers[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i + 1];
    }

    map.set(numbers[i], i + 1);
  }
}

console.log(twoSortedSum([2, 7, 11, 15], 9));
