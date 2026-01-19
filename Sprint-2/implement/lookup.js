function createLookup(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return {};
  }
  if (typeof (array[1]) != 'object') {
    return "Invalid of input";
  }
  target = {};
  for (const [key, value] of array) {
    target[key] = value;
  }
  return target;
}
  // implementation here

module.exports = createLookup;


