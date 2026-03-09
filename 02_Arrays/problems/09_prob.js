// Frequency Counter Pattern

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }

//   return true;
// }

// console.log(same([1, 2, 1], [4, 4, 1]));

// ([1, 2, 3][4, 9, 1])  // true;
// ([1, 2, 3][1, 9]) //false;
// ([1, 2, 1][4, 4, 1]) //false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
  }
  for (let j = 0; j < arr2.length; j++) {
    counter2[arr2[j]] = (counter2[arr2[j]] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 9, 1]));
