/* Intermediate Algorithm Scripting: Diff Two Arrays
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays */

function diffArray(arr1, arr2) {
    var newArr = [];
    function deleteDuplicate(firstArr, secondArr) {
      for (let i = 0; i < firstArr.length; i++) {
       if (secondArr.indexOf(firstArr[i]) == -1) {
         newArr.push(firstArr[i]);
       }
      }
    }
    
    deleteDuplicate(arr1, arr2);
    deleteDuplicate(arr2, arr1);
    // Same, same; but different.
    console.log(newArr);
    return newArr;
  }