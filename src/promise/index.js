console.log(1); //runned

const delay = () => { // runned
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

// const withoutPromise = () => {

//   console.log(1);

//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//       }, 100);
//     }, 100);
//   }, 100);
// };

const main = async () => {

  console.log(1);
  await delay();
  console.log(2);
  await delay();
  console.log(3);
  await delay();
  console.log(4);
  await delay();

};

// main();