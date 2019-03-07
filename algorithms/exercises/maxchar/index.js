// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let result = {};
  str.split("").forEach(val => {
    if (result[val]) {
      result[val]++;
    } else {
      result[val] = 1;
    }
  });

  const maxResult = Math.max(...Object.values(result));
  for (item in result) {
    if (result[item] === maxResult) {
      return item;
    }
  }
  return null;
}

module.exports = maxChar;
