// Write a program that prints a multiplication table for numbers up to 12.
// Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)
// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

// Write a function that returns the largest element in a array.
// Write function that reverses a array, preferably in place.
// Write a function that checks whether an element occurs in a array.
// Write a function that returns the elements on odd positions in a array.
// Write three functions that compute the sum of the numbers in a array: using a for-loop, a while-loop and recursion.

function rotateClock(array) {
    let resultArray = new Array(array.length);
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        //resultArray[i] = new Array(array[i].length);
        k = array.length -1;
        for (let j = 0; j < array.length; j++) {
            resultArray[j] = new Array(array[i].length);
            resultArray[j][i] = array[k][j];
            //console.table(resultArray);
        }
        k--;
    }
    return resultArray;
}


let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.table(array);
console.table(rotateClock(array));
