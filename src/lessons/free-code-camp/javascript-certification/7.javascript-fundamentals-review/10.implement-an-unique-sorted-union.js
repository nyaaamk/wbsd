const uniteUnique = (...arrays) => {
  const result = [];

  for (let arr of arrays) {
    for (let item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }

  return result;
};