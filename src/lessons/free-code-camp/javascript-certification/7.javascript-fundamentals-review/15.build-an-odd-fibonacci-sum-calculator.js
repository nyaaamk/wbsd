const sumFibs = (num) => {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (a <= num) {
    if (a % 2 === 1) sum += a;
    const next = a + b;
    a = b;
    b = next;
  }

  return sum;
};