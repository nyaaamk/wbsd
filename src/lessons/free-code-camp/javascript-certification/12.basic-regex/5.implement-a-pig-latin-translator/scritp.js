const translatePigLatin = (str) => {
  var vowels = /[aeiou]/;

  if (vowels.test(str[0])) {
    return str + "way";
  }

  var firstVowelIndex = str.search(vowels);

  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
};