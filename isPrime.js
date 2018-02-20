/* Simple program to check given number is prime or not with less number of searches*/
let x;

function isPrime(x) {
  if (x === 2) {
    return true;
  }
  // check if x is multiple of 2
  if (x % 2 === 0) {
    return false;
  }
  //else check odd.
  for (let i = 3; i * i <=x; i+=2) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(25));
