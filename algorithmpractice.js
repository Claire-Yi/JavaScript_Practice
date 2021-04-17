practice 1
function reverseStringOver5(string){
  if (string.length >= 5){
    let reversed = '';
    for (i = string.length - 1; i >= 0; i --){
      reversed += string[i];
    }
    return reversed;
  }
  else {
    return string;
  }
}


practice 2
function spinWords(words){
  let result = [];
  let splited = words.split(' ');
  for (let word of splited){
    result.push(reverseStringOver5(word));
  }
  return result.join(' ');
}

console.log(spinWords('join me to welcome them'));


Practice 2
function squareDigits(num){
    let newArray = [];
    let array = Array.from(String(num), Number);
    for (let digit of array){
      newArray.push(Math.pow(digit, 2));
    }
    return newArray.join('');
  }
  
  console.log(squareDigits(9119))

practice 3 Bob is preparing to pass IQ test.
function arrayOfNum(array){
    let newArray = array.split(' ');
    let arrayOfNum = [];
    for (let elem of newArray){
      arrayOfNum.push(parseInt(elem, 10));
    }
    return arrayOfNum;
  }
  
  function iqTest(numbers){
    let even = [];
    let odd = [];
    let array = arrayOfNum(numbers);
    for (let num of array){
      if (num % 2 === 0){
        even.push(array.indexOf(num)+1)
      } else{
        odd.push(array.indexOf(num)+1)
      }
    }
    if (even.length > 1){
      return odd;
    } else {
      return even;
    }
  
  }
  
  console.log(iqTest('1 3 6 9 11'));
