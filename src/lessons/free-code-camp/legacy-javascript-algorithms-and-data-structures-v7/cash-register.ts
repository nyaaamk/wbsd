/* eslint-disable prefer-const */
const PAPERS: { [key: string]: number } = {
  "PENNY"      : 0.01,
  "NICKEL"     : 0.05,
  "DIME"       : 0.1,
  "QUARTER"    : 0.25,
  "ONE"        : 1.0,
  "FIVE"       : 5.0,
  "TEN"        : 10.0,
  "TWENTY"     : 20.0,
  "ONE HUNDRED": 100.0
};

type ICash = [string, number];

function checkCashRegister (price: number, cash: number, cid: ICash[]){
  let amountChange = cash - price;
  const change = [] as ICash[];
  let amountTotal = cid.reduce((acc, itr) => acc + itr[1], 0);
  amountTotal = Math.round(amountTotal * 100) / 100, amountTotal;

  if (amountTotal < amountChange) {
    return { status: "INSUFFICIENT_FUNDS", change };
  } else if (amountTotal === amountChange) {
    return { status: "CLOSED", change: cid };
  }

  const CID = cid.reverse();

  for (let [paper, amount] of CID) {
    const paperValue = PAPERS[paper];
    let amountReturn = 0;

    while (amountChange >= paperValue && amount >= paperValue) {
      amountReturn += paperValue;
      amount -= paperValue;
      amountChange -= paperValue;

      amountChange = Math.round(amountChange * 100) / 100;
    }

    if (amountReturn > 0) {
      change.push([paper, amountReturn]);
    }
  }

  if (amountChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));