function palindrome(str: string) {

  let clean = str.toLowerCase().split("").map((char) => {
    return char.match(/^[0-1a-z]$/) ? char.toLowerCase() : "";
  }).filter(Boolean);

  let reverse = [];

  for(let i = 1; i <= clean.length; i++) {
    console.log(i)
    reverse.push(clean[clean.length - i]);
  }

  console.log(clean, reverse);

  let reverseStr = reverse.filter(Boolean).join("");

  let cleanStr = clean.filter((c) => c).join("")

  console.log(reverseStr === cleanStr, cleanStr, reverseStr)
  
  return reverseStr === cleanStr;
}

palindrome("1 eye for of 1 eye.");