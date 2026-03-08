// splice
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);
console.log(arr);
// This is one of the method to delete the elements in the array linear time complexity

// Pop
const arr2 = [1, 2, 3, 4, 7];
arr2.pop();
console.log(arr2);
// Pop method deletes the element from the end of the array and it takes constant time complexity

// Shift
const arr3 = [1, 2, 3, 4, 5];
arr3.shift();
console.log(arr3);
// Shift method removes the first element of the array and it takes linear time complexity

// Delete
const arr4 = [1, 2, 3, 4, 5];
delete arr4[2];
console.log(arr4);
// This delete method removes the elements from the array but in the memory it is placed as empty so the complexity is constant

// filter
const arr5 = [1, 2, 3, 4, 7];
const result5 = arr5.filter(function (element) {
  return element > 2;
});

console.log(result5);
// This method takes linear time and space complexity..
