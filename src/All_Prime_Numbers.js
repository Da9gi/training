//. Write a program that prints all prime numbers.
//(Note: if your programming language does not support arbitrary size numbers,
// printing all primes up to the largest number you can easily represent is fine too.)

let result = [];

function allPrime(num) {

  if (num == 2) {
    result.push(2);

    return result.reverse();
  } else if (num < 2) {

    return null;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
        
      return allPrime(num - 1);
    }
  }
  result.push(num);

  return allPrime(num - 1);
}

let num = Math.round(Math.random() * 10000);
console.log(num);
console.log(allPrime(num));
