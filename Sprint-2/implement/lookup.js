function createLookup(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return {};
}
  target = {};
  for (const [key, value] of array) {
    target[key] = value;
  }
  return target;
}
  // implementation here

module.exports = createLookup;
const array = [['US', 'USD'], ['CA', 'CAD']];
