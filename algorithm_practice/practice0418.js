//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

function toBinary(array){
    let binaryPlace;
    let num = 0;
    let counter = 1;
    for(let i of array){
      let binaryPlace = Math.pow(2, array.length-counter);
      num += i*binaryPlace;
      counter += 1;
    }
    return num;
  }
  
  console.log(toBinary([0, 0, 0, 1]));
  