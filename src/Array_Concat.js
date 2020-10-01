// Write a function that concatenates two arrays. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

function concatArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

let arr1 = [1, 4, 6];
let arr2 = ["a", "b", "c"];

console.log(concatArray(arr1, arr2));


// Write a function that merges two sorted arrays into a new sorted array. [1,4,6],[2,3,5] → [1,2,3,4,5,6].
// You can do this quicker than concatenating them followed by a sort.

function concatArraySort(arr3, arr4) {
  return [...arr3, ...arr4].sort();
}

let arr3 = [1, 4, 6];
let arr4 = [2, 3, 5];

console.log(concatArraySort(arr3, arr4));
