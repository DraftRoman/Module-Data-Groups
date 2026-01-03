function findMax(elements) {
    if (elements.length === 0) 
        return -Infinity;
    let max = elements[0];
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] > max)
            max = elements[i];
    }
    return max;
}

console.log(findMax([30, 20, "a", 50, 100, -5]));
module.exports = findMax;
