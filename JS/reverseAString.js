/*Basic Algorithm Scripting: Reverse a String
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string */

function reverseString(str) {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--){
      newStr += str[i];
    }
    console.log(newStr);
    return newStr;
  }
  
  reverseString("hello");