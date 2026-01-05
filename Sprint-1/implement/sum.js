function sum(elements) {
    let sum = 0;
    if (elements.length === 0)
        return sum;
    let foundNumber = false;
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === 'number') {
            sum += elements[i];
            foundNumber = true;
        }
    }
    return foundNumber ? sum : null;
}

console.log(sum([]));
module.exports = sum;
