function contains(object, property) {
    if (typeof object !== 'object' || object === null) {
        return false;
    }
    return object.hasOwnProperty(property);
}
const object = [2, 56, 'a', 'b', [], null];;
console.log(contains(object, []));
module.exports = contains;
