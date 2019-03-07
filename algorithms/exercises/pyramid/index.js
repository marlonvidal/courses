// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  debugger;
  if (n <= 1) return "#";

  const totalChars = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    const iterationTotalChars = i * 2 - 1;
    const filledSpaces = totalChars - iterationTotalChars;
    const padSize = Math.floor(filledSpaces / 2);

    let line = "#".repeat(iterationTotalChars);
    line = line.padEnd(iterationTotalChars + padSize, " ");
    line = line.padStart(line.length + padSize, " ");

    console.log(line);
  }
}

module.exports = pyramid;
