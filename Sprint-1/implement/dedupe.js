function dedupe(array) {
    const result = [];

    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}
module.exports = dedupe;
console.log(dedupe(['b', null, 'a', 'ddb', null, null, undefined, undefined]));

