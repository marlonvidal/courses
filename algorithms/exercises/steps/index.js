// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  debugger;
  return stepsRecursive(n, n, "#");
}

function stepsRecursive(n, counter, val) {
  if (counter == 0) return;
  
  if (val.length === n) {
    console.log(val);
    return stepsRecursive(n, counter - 1, val.trim() + "#");
  }

  return stepsRecursive(n, counter, val + " ");
}

module.exports = steps;

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//       let result = "";
//       for (let j = 0; j < n; j++) {
//         result += j <= i ? "#" : " ";
//       }
//       console.log(result);
//     }
//   }
