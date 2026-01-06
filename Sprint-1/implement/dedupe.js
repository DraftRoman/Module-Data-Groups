function dedupe(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] === array[j] && i != j) {
                array.splice(j, 1);
            }
            
        }
    }
    return [...new Set(array)];;
}
module.exports = dedupe;
console.log(dedupe([]));
