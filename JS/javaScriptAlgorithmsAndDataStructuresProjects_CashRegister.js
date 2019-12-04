/* JavaScript Algorithms and Data Structures Projects: Cash Register
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register */

function checkCashRegister(price, cash, cid) {
    //define object for the answer, array for values of coins/bills, array for number of coins/bills in drawer
      let result = {status: null, change: []};
      let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
      let coins = [cid[0][1]/currency[0], cid[1][1]/currency[1], cid[2][1]/currency[2], cid[3][1]/currency[3], cid[4][1]/currency[4], cid[5][1]/currency[5], cid[6][1]/currency[6], cid[7][1]/currency[7], cid[8][1]/currency[8]];
    
    //beware of floating errors
      coins.map(e => Math.round(e));
    
    //calculate change needed
      let change = (cash - price);
    
    //calculate total cash in drawer
      let sum = 0;
      for (let i = 0; i < cid.length; i++) {
        sum += cid[i][1];
      };
      sum = Math.round(sum * 100) / 100;
    
    //return answer if change is higher or equal to sum
      if (change > sum) {result.status = "INSUFFICIENT_FUNDS"; return result}
      else if (change == sum){result.status = "CLOSED"; result.change = cid; return result}
      
    //if sum > change calculate the exact coins
      else {
    
    //iterate over all coins and take them from the drawer
      for (let j = currency.length -1; j >=0; j--) {
        let count = 0;
        while (change >= currency[j] && coins[j] > 0) {
          
          change = Math.round((change - currency[j]) * 100) / 100;
          coins[j] = Math.round((coins[j] - 1) * 100) / 100;
          count = Math.round((count + currency[j]) * 100) / 100;
    
          result.change[j] = [cid[j][0], count];
        }
      };
    
    //if drawer is empty and change is still needed
      if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS"; result.change = []; return result}
    
    //if change is reached and there are still coins in drawer
      else {result.status = "OPEN"}
      }
    
    //filter empty parts of the array and reverse it for right order
      result.change = result.change.filter(Boolean).reverse();
      
      return result;
    } 