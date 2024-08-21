// whiteSpace \s
// not allow space \S
/**
  Character classes
  .	any character except newline
  \w\d\s	word, digit, whitespace
  \W\D\S	not word, digit, whitespace
  [abc]	any of a, b, or c
  [^abc]	not a, b, or c
  [a-g]	character between a & g

  Anchors
  ^abc$	start / end of the string
  \b\B	word, not-word boundary

  Escaped characters
  \.\*\\	escaped special characters
  \t\n\r	tab, linefeed, carriage return

  Groups & Lookaround
  (abc)	capture group
  \1	backreference to group #1
  (?:abc)	non-capturing group
  (?=abc)	positive lookahead
  (?!abc)	negative lookahead

  Quantifiers & Alternation
  a*a+a?	0 or more, 1 or more, 0 or 1
  a{5}a{2,}	exactly five, two or more
  a{1,3}	between one & three
  a+?a{2,}?	match as few as possible
  ab|cd	match ab or cd
 */

export const removeAllWhiteSpace = "   John     Doe    ".replace(/ /g, "");

export const parsedSTring = "   John     Doe    ".replace(/ +/g, " ").trim();

export const mglString = /^[А-Яа-я|Үү|Өө|Ёё|\s|.]{2,255}$/;

export const either = /^([А-Яа-я|Үү|Өө|Ёё]{2}[0-9]{8}|[0-9]{7})$/;

export const engString = /^[A-Za-z|-]{2,120}$/;

export const email = /^[\w|_|.]{3,120}@([\w\d])+(\.){0,1}[\w\d]{2}\.[\w]{2,3}$/;

export const phone = /^[(9|8|6]{1}[0-9]{7}$/;

export const strongPassword = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})$/;

export const optionalPassword = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$/;

export const stringValidator = (string: string, regex: string) => {
  const check = string.match(regex);
  return check?.[0] === string;
};

export const match = (str: string, rgx: RegExp) => {
  return str.match(rgx);
};