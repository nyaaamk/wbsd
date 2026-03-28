const titleCase = (str) => {
  const words = str.split(" ");

  const titleCasedWords = words.map(word => {
    if (word.length === 0) return word;

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleCasedWords.join(" ");
};