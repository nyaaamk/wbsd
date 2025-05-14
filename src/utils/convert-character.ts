const map = {
  "a": "a",
  "б": "b",
  "в": "v",
  "г": "g",
  "д": "d",
  "е": "e",
  "ё": "yo",
  "ж": "j",
  "з": "z",
  "и": "i",
  "й": "i",
  "к": "k",
  "л": "l",
  "м": "m",
  "н": "n",
  "о": "o",
  "ө": "u",
  "п": "p",
  "р": "r",
  "с": "s",
  "т": "t",
  "у": "u",
  "ү": "u",
  "ф": "f",
  "х": "kh",
  "ц": "ts",
  "ч": "ch",
  "ш": "sh",
  "ь": "i",
  "ы": "ii",
  "э": "e",
  "ю": "yu",
  "я": "ya"
};

const convertCharacter = (input: string) => {
  return input.split("").map((char) => {
    return map[char] || char;
  }).join("");
};