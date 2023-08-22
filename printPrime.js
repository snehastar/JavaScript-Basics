//prime number has factors as 1 and itself only. So we divide the number from 1to num to check
//if any number divids it then it's not a prime. But we can check tilll sqrt of num only if i's divisible to reduce TC
function isPrime(i) {
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) return false;
  }
  return true;
}
function print(num) {
  for (let i = 2; i <= num; i++) if (isPrime(i) === true) console.log(i);
}

print(15);
