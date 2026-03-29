export const convertToKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/,/g, "")
    .toLowerCase();
};

const name = "Build a Set of Football Team Cards";

console.log(`${convertToKebabCase(name)}.js`);