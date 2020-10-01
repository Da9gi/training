//Write a program to rotate a 2 dimensional array in clockwise manner.

function rotateClock(array) {
  let resultArray = [];
  let k = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    resultArray[i] = new Array(array[i].length);
  }

  for (let i = 0; i < array.length; i++) {
    if (k >= 0) {
      for (let j = 0; j < array.length; j++) {
        resultArray[j][i] = array[k][j];
      }

      k--;
    }
  }

  return resultArray;
}

let array = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
];

console.table(array);
console.table(rotateClock(array));
