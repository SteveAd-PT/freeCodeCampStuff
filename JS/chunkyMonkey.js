/* Basic Algorithm Scripting: Chunky Monkey
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let index = 0;
    while (index < arr.length){
      let plusArr = arr.slice(index, index+size);
      newArr.push(plusArr);
      index+=size;
    }
    console.log(newArr);
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);