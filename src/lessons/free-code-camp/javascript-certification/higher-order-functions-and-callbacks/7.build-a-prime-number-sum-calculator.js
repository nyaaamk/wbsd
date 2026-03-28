const sumPrimes = (num) => {
  if (num < 2) return 0;

  let sum = 0;

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};