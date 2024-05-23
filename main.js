const input = require('sync-input');

let supplies = [400, 540, 120, 9, 550];

const espressoReq = [250, 0, 16, 1, 4];
const latteReq = [350, 75, 20, 1, 7];
const cappuccinoReq = [200, 100, 12, 1, 6];

const coffeeArr = [espressoReq, latteReq, cappuccinoReq]

function remaining() {
  console.log(`The coffee machine has:
${supplies[0]} ml of water
${supplies[1]} ml of milk
${supplies[2]} g of coffee beans
${supplies[3]} disposable cups
$${supplies[4]} of money`)
}

function buy() {
  let usersChoice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ")

  if (usersChoice === "back") {
    return;
  }

  usersChoice = Number(usersChoice) - 1
  
  if (supplies[0] < coffeeArr[usersChoice][0]) {
    console.log("Sorry, not enough water!")
    return;
  }

  if (supplies[1] < coffeeArr[usersChoice][1]) {
    console.log("Sorry, not enough milk!")
    return;
  }

  if (supplies[2] < coffeeArr[usersChoice][2]) {
    console.log("Sorry, not enough coffee beans!")
    return;
  }

  if (supplies[3] < coffeeArr[usersChoice][3]) {
    console.log("Sorry, not enough cups!")
    return;
  }
  
  supplies[0] -= coffeeArr[usersChoice][0];
  supplies[1] -= coffeeArr[usersChoice][1];
  supplies[2] -= coffeeArr[usersChoice][2];
  supplies[3] -= coffeeArr[usersChoice][3];
  supplies[4] += coffeeArr[usersChoice][4];

  console.log("I have enough resources, making you a coffee!")
}

function fill() {
  supplies[0] += Number(input("Write how many ml of water you want to add: "));
  supplies[1] += Number(input("Write how many ml of milk you want to add: "));
  supplies[2] += Number(input("Write how many grams of coffee beans you want to add: "));
  supplies[3] += Number(input("Write how many disposable cups you want to add:"));
}

function take() {
  console.log(`I gave you $${supplies[4]}`)
  supplies[4] = 0
}


function app(){

  let runProgram = true
  
  while (runProgram) {
    let userInput = input("Write action (buy, fill, take, remaining, exit): ");

    switch (userInput) {
      case "buy":
        buy();
        break;
      case "fill":
        fill();
        break;
      case "take":
        take();
        break;
      case "remaining":
        remaining();
        break;
      default:
        runProgram = false
    }
  }
}

app();
