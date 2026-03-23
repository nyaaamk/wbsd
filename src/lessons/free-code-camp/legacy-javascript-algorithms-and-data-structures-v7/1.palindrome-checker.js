function palindrome (str){

  const clean = str.toLowerCase().split("").map((char) => {
    return char.match(/^[0-1a-z]$/) ? char.toLowerCase() : "";
  }).filter(Boolean);

  const reverse = [];

  for (let i = 1; i <= clean.length; i++) {
    console.log(i);
    reverse.push(clean[clean.length - i]);
  }

  console.log(clean, reverse);

  const reverseStr = reverse.filter(Boolean).join("");

  const cleanStr = clean.filter((c) => c).join("");

  console.log(reverseStr === cleanStr, cleanStr, reverseStr);

  return reverseStr === cleanStr;
}

palindrome("1 eye for of 1 eye.");