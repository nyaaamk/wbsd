const pyramid = (char, rows, inverted) => {
  const width = 2 * rows - 1;
  let result = "\n";

  for (let row = 1; row <= rows; row++) {
    const actualRow = inverted ? rows - row + 1 : row;
    const chars = 2 * actualRow - 1;
    const spaces = (width - chars) / 2;
    result += " ".repeat(spaces) + char.repeat(chars) + "\n";
  }

  return result;
};