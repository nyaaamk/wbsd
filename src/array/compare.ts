const values1 = [{
  a: "a",
  b: "b"
}, {
  a: "c",
  b: "d"
}];

const values2 = [{
  a: "e",
  b: "f"
}, {
  a: "g",
  b: "h"
}];

const compare = (arr1:any, arr2:any) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((elm1:any) => arr2.some((elm2:any) =>
      elm1.optionId === elm2.optionId && elm1.name === elm2.name
    ))
  );
};

console.log(">>> 1", compare(values1, values2));
console.log(">>> 2", compare(values1, values1));