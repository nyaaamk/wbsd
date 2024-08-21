const str = "okkao1825@gmail.com";

const maskEmail = (mail: string) => {
  const [email, domain] = mail.split("@");

  return `${email.split("").map((char, index) => {
    if (index === 0 || index === email.length - 1) {
      return char;
    }
    return "*";
  }).join("")}@${domain}`;
};

console.log(maskEmail(str));