const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
let frequency = 0;

for (const line of input) {
    frequency += Number(line);

}

console.log("The frequency is", frequency);

