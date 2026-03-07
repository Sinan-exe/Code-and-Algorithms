const arr = [1, 2, 3, 4];
const res = arr[2];
console.log(res);

// let us look at the array traversal methods

// For loop
const arr1 = [1, 2, 3, 4];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// ForEach loop
const arr2 = [1, 2, 3, 4];
arr2.forEach(function (ele, index) {
  console.log(ele, index);
});

// ForOf loop
const arr3 = [1, 2, 3, 4];
for (elements of arr3) {
  console.log(elements);
}
