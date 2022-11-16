//Write a program that returns an array as well as
// the sum of all prime numbers greater than 25
// and less than 99

function isPrime(num) {
  if (num == 1) return 0;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

function calculatePrimes(range) {
  let prime_nums = [];
  let sum = 0;
  for (let i = 1; i <= range; i++) {
    if (isPrime(i)) {
      prime_nums.push(i);
      if (i > 25 && i < 99) {
        sum += i;
      }
    }
  }
  prime_nums.push(sum); ////sum push at last index of prime number's array
  return prime_nums;
}
console.log(calculatePrimes(100));
