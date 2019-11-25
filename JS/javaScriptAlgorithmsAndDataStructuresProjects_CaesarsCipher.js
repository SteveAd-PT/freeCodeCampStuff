/* JavaScript Algorithms and Data Structures Projects: Caesars Cipher
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher */

function rot13(str) {

  let ciphered = "";
  for (let i = 0; i < str.length; i++) {
    let num = str.codePointAt(i);
    if (num > 64 && num < 91) {
      num += 13;
      if (num > 90) {num -= 26};
      num = String.fromCharCode(num);
      ciphered += num;
    } else {
      num = String.fromCharCode(num);
      ciphered += num;
    }
  }
  console.log(ciphered);
  return ciphered;
}