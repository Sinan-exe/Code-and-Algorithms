// Insert and Remove Elements
// Implement a function modifyArray that takes an array and two additional arguments:

// index – the position where a new element should be added.

// value – the value to insert at the given index.

// This function should add the element at the specified index and return the modified array. If index is out of range, add value at the end.

// Example: modifyArray([10, 20, 30], 1, 15) should return [10, 15, 20, 30].

function modiyArray(arr, index, value) {
  if (index >= 0 && index <= arr.length) {
    arr.splice(index, 0, value);
  } else {
    arr.push(value);
  }
  return arr;
}
console.log(modiyArray([10, 30, 40], -1, 20));
