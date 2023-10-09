const bcrypt = require("bcryptjs");

const saltRounds = 10;

const test = async () => {
  const text = "Aa123456@";

  // const encryptedText = await bcrypt.hash(text, saltRounds);
  // console.log(' >>>  ~ file: bcrypt.js ~ line 9 ~ encryptedText', encryptedText);

  // const encryptedText = "$2a$10$rQmTa4D8s8IOL6ECxXkPcOm1q2xQGOLL3YZvGpEYNcZQiPMsNrbjG"
  
  // $2a$10$Xi2XKtCQmK9fz5K6kNGYl.RawgibGW15X/s9WowpnUliIufMVHJJK

  // const isMatch = await bcrypt.compare(text, encryptedText);
  // console.log(' >>>  ~ file: bcrypt.js ~ line 13 ~ isMatch', isMatch);

  const str = "88755029";

  console.log(`${str.substring(0, 2)}****${str.substring(6)}`);
};

test();