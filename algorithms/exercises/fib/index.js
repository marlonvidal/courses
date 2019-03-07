// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   debugger;
//   if (n == 0) return 0;

//   if (n == 1) return 1;

//   var arr = [0, 1];
//   for (let i = 1; i <= n; i++) {
//     if (i == n) break;

//     const result = arr[i - 1] + arr[i];
//     arr.push(result);
//   }

//   return arr[arr.length - 1];
// }

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    let result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
