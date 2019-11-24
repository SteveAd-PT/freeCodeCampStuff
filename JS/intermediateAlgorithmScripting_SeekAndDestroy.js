/*Intermediate Algorithm Scripting: Seek and Destroy
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy */

function destroyer(arr) {
    // Remove all the values
    let newArr = Array.from(arguments).slice(1);
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) > -1) {
        delete arr[i];
      }
    }
    console.log(arr);
    return arr.filter(Boolean);
  };