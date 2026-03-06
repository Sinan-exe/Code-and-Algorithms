function printItem(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printItem(4);

// This Function perform n*n times operations so this is called Quadratic time complexity functions and it is represented as O(N^2)

function printeElements(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

printeElements(3);

// This function perform n*n*n we can represent this as O(N^3). But we name it is the quadratic time complexity.
