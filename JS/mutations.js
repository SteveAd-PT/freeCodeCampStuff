/* Basic Algorithm Scripting: Mutations
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
*/

function mutation(arr) {
    let newArr = arr[1].toLowerCase().split("");
    let arrArr = arr[0].toLowerCase().split("");
    let value = 0;
    for(let i = 0; i < newArr.length; i++){
      if(arrArr.indexOf(newArr[i]) > -1){
        value = 1;
      }else{return false;}
    }
    if(value === 1){return true;}
  }
  
  mutation(["hello", "hey"]);