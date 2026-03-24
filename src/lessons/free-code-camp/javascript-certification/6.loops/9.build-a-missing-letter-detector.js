const fearNotLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    const expected = String.fromCharCode(str.charCodeAt(0) + i);
    if (str[i] !== expected) {
      return expected;
    }
  }
  return undefined;
};