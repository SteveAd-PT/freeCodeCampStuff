/* Basic Algorithm Scripting: Title Case a Sentence
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
*/

function titleCase(str) {
    str = str.toLowerCase();
    let regex = /(^|\s)\S/g;
    let newStr = str.replace(regex, function(x){return x.toUpperCase();});
  
    return newStr;
  }
  
  titleCase("I'm a little tea pot");