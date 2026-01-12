const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n").map(Number);;
let frequency = 0;
const seen = new Set();
seen.add(0);
function findFirstRepeat(input) {
    while (true) {
        for (const line of input) {
            frequency += line;
            if (seen.has(frequency))
                return frequency;
            seen.add(frequency);
        }
    }
}

const result = findFirstRepeat(input);
console.log("The first repeated number after some increases and decreases", result);

