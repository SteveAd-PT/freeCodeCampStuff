/*Factorialize a Number
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number */

function factorialize(num) {
    let count = 1;
    for (let i = 1; i <= num; i++){
      count *= i;
    }
    return count;
  }
  
  factorialize(5);