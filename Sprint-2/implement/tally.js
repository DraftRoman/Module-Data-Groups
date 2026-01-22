function tally(array) {
    let object = {};
    if (array.length === 0) {
        return object
    }
    if (typeof array !== 'object') {
        throw new Error('Invalid input');
    }
    for (let i = 0; i < array.length; i++) {
        if (object[array[i]]) {
            object[array[i]] += 1;
        } else {
            object[array[i]] = 1;
        }
    }
    return object;
}
module.exports = tally;
