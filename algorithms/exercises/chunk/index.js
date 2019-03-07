// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let counter = 0;
  let result = [];
  let temp = [];

  for (let item of array) {
    temp.push(item);
    counter++;

    if (counter == size) {
      result.push(temp);
      temp = [];
      counter = 0;
    }
  }

  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
}

module.exports = chunk;
