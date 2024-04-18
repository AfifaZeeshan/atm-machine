#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 9717;
let pinAnswer = await inquirer.prompt([{
        message: "Enter your pin code.",
        type: "number",
        name: "pinNumber",
    }
]);
if (pinAnswer.pinNumber === myPin) {
    console.log("You have successfully logged in to the menu");
}
else {
    console.log("Incorrect pincode, Please Try Again");
}
let operationAns = await inquirer.prompt([
    {
        message: "Select your desired operator",
        type: "list",
        name: "operator",
        choices: ["Cash Withdrawal", "Balance Enquiry", "Fast Cash"],
    }
]);
if (operationAns.operator === "Cash Withdrawal") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "Enter your amount",
        }]);
    if (amountAns > myBalance) {
        console.log("Sorry! You have insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} have been withdrawn successfully`);
    }
}
else if (operationAns.operator === "Balance Enquiry") {
    console.log(`Your balance is ${myBalance}`);
}
if (operationAns.operator === "Fast Cash") {
    let fastcashAns = await inquirer.prompt([{
            name: "fastcash",
            type: "list",
            message: "Please select a denomination",
            choices: ["500", "1000", "2000", "5000", "10000", "15000", "20000"]
        }]);
    if (fastcashAns.fastcash > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= fastcashAns.fastcash;
        console.log(`${fastcashAns.fastcash} have been withdrawn successfully`);
        console.log(`Your remaining balance is ${myBalance}`);
    }
    ;
}
