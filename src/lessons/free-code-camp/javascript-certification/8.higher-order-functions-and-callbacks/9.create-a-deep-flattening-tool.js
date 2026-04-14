const steamrollArray = (arr) => {
  const result = [];

  const flatten = (element) => {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      result.push(element);
    }
  };

  flatten(arr);
  return result;
};