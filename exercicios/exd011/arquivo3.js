'use strict';

function doublePower(currentPowers) {
  // write code here
  let result = [];
  for(let i = 0 ; i < currentPowers.length ; i++){
    result.push(currentPowers[i] * 2)
  }
  return result
}

doublePower([100, 150, 200, 220]); 
doublePower([45, 34, 56, 67]); 
doublePower([]);

function makeStickers(detailsCount, robotPart) {
  
  let result = []
  if(detailsCount === 0){
    return result
  }
  for(let i = 1 ; i <= detailsCount ; i++){
      result.push(`${robotPart} detail #${i}`)
  }
  return result
}

makeStickers(3, ‘Body’);
makeStickers(4, ‘Head’);
makeStickers(0, ‘Foot’);

let meuPrimeiroValor = 'meuprimeirovalor';
const meuSegundoValor = meuPrimeiroValor + 'meusegundovalor';
const meuTerceiroValor = meuSegundoValor + 'meuterceirovalor';

console.log(meuPrimeiroValor, meuSegundoValor, meuTerceiroValor);

const trapezePerimeter = 2 + 4 + 4 + 10;
const trianglePerimeter = 10 + 20 + 30;
const rectanglePerimeter = 2 * (50 + 20);
const bigMathFormula = (10 * trapezePerimeter + rectanglePerimeter * 100) - 228;

function decryptMessage(message) {
 
  let result = "";

  for(let i = message.length - 1 ; i >= 0 ; i--){
    result += message[i];
  }
  
  return result;
}

function isEven(number) {
 
  if(number % 2 === 0){
    return true;
  } else{
    return false;
  }

}

isEven(100) 
isEven(0) 
isEven(77) 
isEven(10.2) 
isEven(-2)

function getCentury(year) {
  if(year === 0){
    return 1;
  }

  let century = Math.ceil(year / 100);

  if(century === 1){
    return 1
  } else if(century === 17){
    return 17
  } else if (century === 18){
    return 18;
  } else if (century === 19){
    return 19;
  } else if (century === 20){
    return 20;
  } else if(century === 21){
    return 21
  } else{
    return 400
  }

}

getCentury(2001) 
getCentury(0)
getCentury(1786) 
getCentury(1500)