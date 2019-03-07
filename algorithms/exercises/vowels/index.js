// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = "aeiou";
  let total = 0;

  for (let item of str.toLowerCase().split("")) {
    if (vowels.includes(item)) total++;
  }

  return total;
}

module.exports = vowels;
