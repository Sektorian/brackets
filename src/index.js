module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr1 = [];
  let arrStr = str.split('');
  

 label: for (let i = 0; i < arrStr.length; i++) {

    
    let count = 0;

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === arrStr[i]) {

        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          if (arr1.length !== 0) {
            if (arr1[arr1.length - 1] === bracketsConfig[j][1]) {
              arr1.pop();
            } else {arr1.push(arrStr[i])}
          } else {arr1.push(arrStr[i]);}
          continue label;
        }
        count = 1;

      }
    }

    if (count === 1) {
      arr1.push(arrStr[i]);
    }

    if (count === 0) {

      if (arr1.length === 0) {return false}

      for (let k = 0; k < bracketsConfig.length; k++) {

        if (bracketsConfig[k][1] === arrStr[i]) {

          if (arr1[arr1.length - 1] === bracketsConfig[k][0]) {
            arr1.pop();
          } else {return false}

        }

      }

    }
    
  }
  if (arr1.length !== 0) {return false}
  return true;
}
