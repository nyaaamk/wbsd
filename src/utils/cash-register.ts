const _PAPERS = [
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01]
];

const PAPERS: { [key: string]: number } = {
  "ONE HUNDRED": 100,
  "TWENTY"     : 20,
  "TEN"        : 10,
  "FIVE"       : 5,
  "ONE"        : 1,
  "QUARTER"    : 0.25,
  "DIME"       : 0.1,
  "NICKEL"     : 0.05,
  "PENNY"      : 0.01
};

const papers = Object.keys(PAPERS).map((key) => ({
  name : key,
  value: PAPERS[key]
}));

type IChange = [string, number];

function checkCashRegister (price: number, cash: number, cid: [string, number][]){
  let amount = cash - price;
  console.log(">>> amount >>>", amount);
  if (amount < 0) return {};

  const cashInDrawer = papers.filter((paper) => {
    const found = cid.find((c) => c[0] === paper.name);
    if (found) {
      return {
        name : paper.name,
        value: found[1]
      };
    }
  });
  console.log(">>> cashInDrawer >>>", cashInDrawer);

  const change: IChange[] = [];

  let needForChange: IChange[] = papers.map((p) => ([p.name, 0]));

  cashInDrawer.forEach((cid) => {
    while (cid.value > amount) {
      needForChange = needForChange.map((nfc) => {
        let nfcAmount = nfc[1];
        if (nfc[0] === cid.name) {
          console.log(">>> nfc[0] === cid.name >>>", cid.name, cid.value);
          nfcAmount = nfcAmount + cid.value;
          console.log([nfc[0], nfcAmount]);
        }

        return [nfc[0], nfcAmount];
      });

      amount -= cid.value;
      console.log(">>> amount >>>", amount);
    }
  });

  needForChange = needForChange.filter((nfc) => nfc[1]);

  console.log(">>> needForChange >>>", needForChange);

  return change;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);

/**
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]),
  {
    status: "OPEN",
    change: [["QUARTER", 0.5]]
  }
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]),
  {
    status: "OPEN",
    change: [
      ["TWENTY", 60],
      ["TEN", 20],
      ["FIVE", 15],
      ["ONE", 1],
      ["QUARTER", 0.5],
      ["DIME", 0.2],
      ["PENNY", 0.04]
    ]
  }
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
);
*/