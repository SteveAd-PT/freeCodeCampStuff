/*Basic Algorithm Scripting: Confirm the Ending
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending */

function confirmEnding(str, target) {
    let regex = new RegExp(target + '$', "i");
    return regex.test(str);
  }
  
  confirmEnding("Bastian", "n");