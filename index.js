/* Make sumItems a function that sums all the numbers in an array.
 * So if you input the array [1, 2, 3, 4, 5], the function will return 15.
 * This will be your base case.
 *
 * Modify your function so that your input array can contain either numbers
 * or arrays of numbers with no limit to the number of nested arrays.
 * So if you input the array [[1, 2, [[3], 4]], 5, []], the function will return 15.
 */

const sumItems = function(array) {

  for (const index in array) {

    // test for nested array
    if (Array.isArray(array[index])) {

      // flatten: push elements of nested array to end of array
      for (const element of array[index]) {
        array.push(element);
      }

      // delete the original 'item' from array
      array.splice(index, 1);

      // call the function again with the 'less nested array'
      sumItems(array);
    }
  }
  // Base case: sum the numbers in a 'flat' array
  return array.reduce((prev, curr) => prev + curr, 0);
};

// const arr1 = [1, 2, 3, 4, 5];
// console.log(sumItems(arr1)); // => 15

// const arr2 = [[100, 2, [1, 2, 3]], 30, 45, 5, 60];
// console.log(sumItems(arr2)); // => 242


module.exports = sumItems;