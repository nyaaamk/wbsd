const getIndexToIns = (arr, num) => {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted.findIndex(x => x >= num) === -1
    ? sorted.length
    : sorted.findIndex(x => x >= num);
};