/* eslint-disable @typescript-eslint/no-explicit-any */
const values1 = [{
  optionId: "119be0f4",
  name    : "color1"
}, {
  optionId: "72512f14",
  name    : "size1"
}];

const values2 = [{
  optionId: "119be0f4",
  name    : "color2"
}, {
  optionId: "72512f14",
  name    : "size2"
}];

const values3 = [{
  name    : "size1",
  optionId: "72512f14"
}, {
  optionId: "119be0f4",
  name    : "color1"
}];

const compare = (arr1: any, arr2: any) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((elm1: any) => arr2.some((elm2: any) =>
      elm1.optionId === elm2.optionId && elm1.name === elm2.name
    ))
  );
};

console.log(">>> 1", compare(values1, values2));
console.log(">>> 2", compare(values1, values3));