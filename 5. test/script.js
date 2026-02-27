const moneyDisplay = document.getElementById("money-display");
const mpcButton = document.getElementById("mpc-btn");
const mpcUpgradeButton = document.getElementById("mpc-btn-upgrade");
const mpcDisplay = document.getElementById("mpc-display");
const mpcNextDisplayPrice = document.getElementById("mpc-nprice");
const mpcLvlDisplay = document.getElementById("mpc-lvl-display");

const debug = document.getElementById("debug");

mpcButton.addEventListener("click", moneyButton);
mpcUpgradeButton.addEventListener("click", buyUpgrade);

let money = 0;
let moneyPerClick = 1;
let upgradeLvl = 0;

const baseCost = 5;
const CostMulti = 1.35;

const baseMoney = 0.5;
const moneyMulti = 1.05;

updateUI();

function moneyButton() {
  money += Math.floor(moneyPerClick);
  moneyDisplay.textContent = Math.floor(money);

  updateUI();
}

function buyUpgrade() {
  let cPrice = Math.floor(baseCost * Math.pow(CostMulti, upgradeLvl));

  console.log(cPrice);
  if (money >= cPrice) {
    money -= cPrice;

    let addedMoney = baseMoney * Math.pow(moneyMulti, upgradeLvl);

    upgradeLvl++;
    moneyPerClick += addedMoney;

    updateUI();
  }
}

function updateUI() {
  let nPrice = Math.floor(baseCost * Math.pow(CostMulti, upgradeLvl));
  mpcNextDisplayPrice.textContent = nPrice;

  debug.textContent = `Money: ${Math.floor(money)} | mpc: ${Math.floor(moneyPerClick)}`;

  console.log(`----------------------`);

  moneyDisplay.textContent = Math.floor(money);
  console.log(`Money: ${Math.floor(money)}`);

  mpcDisplay.textContent = Math.floor(moneyPerClick);
  console.log(`Money Per Click: ${Math.floor(moneyPerClick)}`);

  console.log(`Next Upgrade Price: ${nPrice}`);

  mpcLvlDisplay.textContent = upgradeLvl + 1;
  console.log(`Next Upgrade lvl: ${upgradeLvl + 1}`);
}
