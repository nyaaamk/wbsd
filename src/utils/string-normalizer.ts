export const convertToKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const name = "Build an All-True Property Validator";

console.log(`${convertToKebabCase(name)}.js`);