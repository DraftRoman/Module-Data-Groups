function findMax(elements) {
    if (elements.length === 0) 
        return -Infinity;
    if (!Array.isArray(elements)) {
        return NaN;
    }
    let hasNumber = false;
    let max = -Infinity;
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number") {
            if (!hasNumber || elements[i] > max) {
                max = elements[i];
                hasNumber = true;
            }
        }
    }
    return hasNumber ? max : NaN;
}

module.exports = findMax;
