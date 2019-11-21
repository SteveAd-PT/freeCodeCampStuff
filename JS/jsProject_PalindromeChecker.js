/* JavaScript Algorithms and Data Structures Projects: Palindrome Checker
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker */

function palindrome(str) {
    //create empty array for comparison
    let stringCompare = [];
    //replce all non-alphanumeric characters from given string and return it as lower         case and split into single characters
    let regex = /\W|_/g; 
    let newStr = str.replace(regex, "").toLowerCase().split("");
    //duplicate the split array backwards into the compare array
    for (let i = newStr.length-1; i >= 0; i--) {
      stringCompare.push(newStr[i]);
    };
    //check if split string and compare string are equal
    return stringCompare.join("") === newStr.join("");
  }
  