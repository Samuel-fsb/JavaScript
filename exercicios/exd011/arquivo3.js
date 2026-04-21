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
