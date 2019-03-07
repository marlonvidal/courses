// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   for(var i = 0; i < stringA.length; i++) {
    var letter = stringA.charAt(i);
    if(isLetter(letter)) {
      var idx = stringB.indexOf(letter);
      if(idx > -1) {
        stringB = stringB.replace(letter, '').trim();
      }
      else {
        return false;
      }
    }
  }

  for (var i = 0; i < stringB.length; i++) {
    var letter = stringB.charAt(i)
    if(isLetter(letter))
      return false;
  }

  return true;
}

function isLetter(letter)  {
  var regex = /^[A-Za-z]+$/;

  if(letter.match(regex))
    return true;

  return false;
}

module.exports = anagrams;
