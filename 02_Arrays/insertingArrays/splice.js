const arr = [1, 3, 5, 6];

arr.splice(1, 0, 2);

console.log(arr);

// Third way of inserting array elements
// Time Complexity O(1)
// Space Complexity O(N)

// Note : if we are adding multiple elements then the space complexity becomes O(k)
