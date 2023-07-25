const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("numbers", numbers);

const check = numbers.map((i) => i > 5);
// console.log(" >>>  ~ check", check);

const num = numbers.map((i) => i);
// console.log("num", num);

const userAges = [
  {
    userId: 1,
    value : 10
  },
  {
    userId: 2,
    value : 20
  },
  {
    userId: 3,
    value : 20
  }
];
console.log("userAges", userAges);

const userData = [
  {
    _id : 1,
    name: "name1",
    age : 0
  },
  {
    _id : 2,
    name: "name2",
    age : 0
  },
  {
    _id : 3,
    name: "name3",
    age : 0
  }
];
console.log("userData", userData);

const result = userData.map((user) => ({
  ...user,
  age: userAges.find((age) => age.userId === user._id).value
}));

console.log("result", result);