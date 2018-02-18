/* Simple program to check given number is prime or not*/
let x;

function isPrime(x) {
  if (x === 2) {
    return true;
  }
  if (x % 2 === 0) {
    return false;
  }
  for (let i = 3; i * i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
