/*Intermediate Algorithm Scripting: Sum All Numbers in a Range
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range */

function sumAll(arr) {
    arr.sort(function(a, b) {return a - b});
    let newArr = [];
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum+=i;
    };
    return sum;
  };