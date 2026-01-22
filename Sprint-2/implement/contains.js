function contains(object, property) {
    if (typeof object !== 'object' || object === null) {
        return false;
    }
    if (Object.values(object).includes(property) || Object.keys(object).includes(property)) {
        return true;
    }
    return false;
}

module.exports = contains;
