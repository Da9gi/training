// Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function concatAlternate(arr1, arr2) {
  let result = [];
  let i = 0;

  while (i < arr1.length || i < arr2.length) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
    i++;
  }

  return result;
}

let arr1 = ["a", "b", "c", 5, 60, 78];
let arr2 = [1, 2, 3, 4, "z", "t"];

console.log(concatAlternate(arr1, arr2));
