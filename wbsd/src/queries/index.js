const qs = require("qs");

const main = () => {
  const obj = {
    type      : "",
    query     : "",
    nearLat   : "",
    equipments: ["1", "2"]
  };

  console.log(qs.stringify(obj));
};

main();