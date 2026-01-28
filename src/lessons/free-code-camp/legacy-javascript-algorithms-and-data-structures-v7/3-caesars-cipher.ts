const rot13 = (str: string) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const full = alphabet.length;
  const half = full / 2;

  const arr = str
    .toUpperCase()
    .split("")
    .map((char) => {
      let index = alphabet.indexOf(char);

      if (index < 0) {
        return char;
      } else if (index >= half) {
        index -= half;
      } else {
        index += half;
      }

      return alphabet.charAt(index);
    });

  console.log("arr >>>", arr);

  return arr.join("");
};

console.log(rot13("SERR PBQR PNZC"));

/**
  1. rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
  2. rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
  3. rot13("SERR YBIR?") should decode to the string FREE LOVE?
  4. rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 */