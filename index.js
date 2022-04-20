const ps = require('prompt-sync');
const prompt = ps();


let userMaxNum = prompt("Please specify a maximum number: ");
let userRuleChoice = prompt("Please specify the numbers you'd like to apply rules for, separated by spaces: ");
const userRuleChoiceArr = userRuleChoice.split(" ");
console.log(userRuleChoiceArr);

function checkRuleChoice(numStr) {
    return userRuleChoiceArr.indexOf(numStr) >= 0;
}



for(let i=1; i<=userMaxNum; i++) {

    let result = [];

    if(i % 3 === 0 && checkRuleChoice("3")){
        result.push("Fizz")
    }

    if(i % 5 === 0 && checkRuleChoice("5")) {
        result.push("Buzz")
    }

    if(i % 7 === 0 && checkRuleChoice("7")) {
        result.push("Bang")
    }

    if(i % 11 === 0 && checkRuleChoice("11")) {
        result = ["Bong"];
    }

    if(i % 13 === 0 && checkRuleChoice("13")) {
        const indexOfFirstB = result.findIndex(item => item[0] === "B");
        result.splice(indexOfFirstB, 0, "Fezz");
    }

    if(i % 17 === 0 && checkRuleChoice("17")) {
        result.reverse();
    }

    if (result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}
