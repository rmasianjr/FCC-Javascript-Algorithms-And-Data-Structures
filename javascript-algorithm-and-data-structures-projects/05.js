/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/

/* Cash Register */

const denomination = [
  { name: 'ONE HUNDRED', value: 100.0 },
  { name: 'TWENTY', value: 20.0 },
  { name: 'TEN', value: 10.0 },
  { name: 'FIVE', value: 5.0 },
  { name: 'ONE', value: 1.0 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.1 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0.0);

  change = Number(parseFloat(change).toFixed(2));
  cidTotal = Number(parseFloat(cidTotal).toFixed(2));

  if (cidTotal < change) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    };
  }

  if (cidTotal === change) {
    return {
      status: 'CLOSED',
      change: cid
    };
  }

  // start from the highest money in drawer
  cid = cid.reverse();

  const changeArr = denomination.reduce((acc, curr, index) => {
    let denoCurrency = curr.name;
    let denoValue = curr.value;
    let drawerItem = cid[index]; // ['ONE HUNDRED', 100]
    let count = 0;
    while (change >= denoValue && drawerItem[1] > 0) {
      change -= denoValue;
      change = Number(parseFloat(change).toFixed(2));
      drawerItem[1] -= denoValue;
      count++;
    }

    if (count > 0) {
      acc.push([denoCurrency, count * denoValue]);
    }

    return acc;
  }, []);

  if (changeArr.length < 0 || change > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    };
  }

  return {
    status: 'OPEN',
    change: changeArr
  };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]
// ]);

// checkCashRegister(3.26, 100, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]
// ]);

// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.5],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 0],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0]
// ]);

checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]);
