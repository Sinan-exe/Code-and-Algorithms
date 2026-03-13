function findPair(arr, target) {
  let set = new Set();

  for (let ele of arr) {
    if (set.has(ele - target) || set.has(ele + target)) {
      return true;
    }
    set.add(ele);
  }

  return false;
}

console.log(findPair([-4, 4], -8));
