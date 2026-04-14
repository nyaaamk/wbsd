const smallestCommons = (arr) => {
  const [min, max] = arr[0] < arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

  let result = 1;
  for (let i = min; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
};