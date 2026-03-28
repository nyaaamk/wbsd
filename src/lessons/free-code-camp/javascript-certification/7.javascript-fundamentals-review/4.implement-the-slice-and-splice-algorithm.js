const frankenSplice = (arr1, arr2, n) => {
  const result = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
};