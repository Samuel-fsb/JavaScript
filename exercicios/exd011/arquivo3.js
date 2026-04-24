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

makeStickers(3, 'Body');
makeStickers(4, 'Head');
makeStickers(0, 'Foot');

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

function makeDecision(fuelRemaining, distance, fuelConsumption) {

   if(distance < 0 || fuelRemaining < 0 || fuelConsumption <= 0) {
    return 'please, enter the valid data';
   }

  let distanciaPossivel = (fuelRemaining / fuelConsumption) * 100;

   
   if(distanciaPossivel >= distance) {
    return 'reach gas station by themselves';
  } else if(distanciaPossivel < distance) {
    return 'ask for help';
  }
}

makeDecision(10, 34, 20) 
makeDecision(0, 34, 20) 
makeDecision(-2, -30, 0) 
makeDecision(2, 25, 8)

function convertCurrency(amount, exchangeRate, currencyName) {
  
  if(amount <= 0 || exchangeRate <= 0){
    return 'Enter valid data';
  }
  
  let conversao = amount * exchangeRate;
  let formatado = +conversao.toFixed(2);

  if(amount > 0 && exchangeRate > 0){
    return `Give them ${formatado} ${currencyName}(s)`;
  }
}

convertCurrency(10000, 1.0946, 'dollar');
convertCurrency(250, 4.338, 'zloty'); 
convertCurrency(1, 40.7131, 'hryvnia');
convertCurrency(1, 5.3364, 'Real'); 
convertCurrency(-100, -0.034, 'bolivar');

function getPlan(startProduction, numberOfMonths, percent) {
  let goals = [];

  let currentProduction = startProduction;

  for(let i = 0 ; i < numberOfMonths ; i++) {
    currentProduction = Math.floor(currentProduction + (currentProduction * (percent / 100)))
    goals.push(currentProduction)
  }
  return goals;
}

getPlan(10, 4, 30); 
getPlan(1000, 6, 20); 

function getSpeedStatistic(testResults) {
  let velocity = [];
  let max = testResults[0];
  let min = testResults[0];
  let sum = 0;
  let average = 0;

  if(testResults.length === 0){
    return [0, 0, 0];
  }

  for(let i = 0 ; i < testResults.length ; i++){
    if(testResults[i] > max){
      max = testResults[i];
    }
    if(testResults[i] < min){
      min = testResults[i];
    }
    sum += testResults[i];
    average = Math.floor(sum / testResults.length);
    velocity.push(average);
  }
  return [min, max, average];
}

getSpeedStatistic([]); 
getSpeedStatistic([10]); 
getSpeedStatistic([8, 9, 3, 12]);
getSpeedStatistic([10, 10, 11, 9, 12, 8]); 


function getSuccessRate(statistic) {
  
  let num = '';

  if(statistic === ''){
    return 0;
  }

  for(const string of statistic){
    
    if(string === '1') {
      num++
    }
  }

  return (num / statistic.length) * 100;
}

getSuccessRate('11100'); 
getSuccessRate('1100'); 
getSuccessRate('000000'); 
getSuccessRate('11111');
getSuccessRate(''); 


function getGuestsCount(guestsInput){

  let guestsNumber = parseInt(guestsInput)
  return isNaN(guestsNumber) ? 'not a number' : guestsNumber;
}

function calculateProfit(amount, percent, period) {
  let total = amount;

   for(let i = 0 ; i < period ; i++){
     total += (total * percent) / 100; 
   }
   return total - amount;
}

calculateProfit(1000, 5, 1); 
calculateProfit(12500, 3, 12); 

function isWerewolf(target) {
  let direct = '';
  let reversed = '';
  let letters = 'abcdefghijklmnopqrstuvxywz';

  for (let string of target.toLowerCase()) {
    if(letters.includes(string) === true){
      direct += string;
      reversed = string + reversed;
    }
  }
  return direct === reversed;
}

isWerewolf('rotator'); 
isWerewolf('home');
isWerewolf('Racecar'); 
isWerewolf('eva, can i see bees in a cave'); 

function splitString(str) {
  let result = [];
  if(str.length % 2 !== 0) {
    str += '_';
    }

  for(let i = 0 ; i < str.length ; i += 2){
      result.push(str[i] + str[i + 1]);
     }

  return result;
}

splitString('123456');
splitString('ab cd ef'); 
splitString('abc'); 
splitString(' '); 
splitString(''); 



 function multiply(a, b = 1) {

    return a * b;
  }

multiply(3);
multiply(5, 10) 
multiply(24) 

function getTask(weekday) {
  
  switch (weekday) {
    case 'monday': 
    return 'Write a new module for the program';

    case 'tuesday':
    return 'Test the module and find bugs';

    case 'wednesday':
    return 'Write a new module for the program';

    case 'thursday':
    return 'Test the module and find bugs';

    case 'friday':
    return 'You need to meet the boss today';

    case 'saturday':
    return 'Spend the evening with your friends';

    case 'sunday':
    return 'Go to the movies in the evening';

    default:
    return 'Entered the wrong day of the week';
    }
  }

getTask(sunday);

const contador = 5;

  switch (true) {
    case contador < 5:
    console.log('Poucos');
    break;

    case contador > 10:
    console.log('Muitos');
    break;

    default:
    console.log('Alguns');
  }

  function getDirection (direction) {

  switch (direction) {
    case 'forward':
    return 'hor=0 ver=1';

    case 'back':
    return 'hor=0 ver=-1';

    case 'right':
    return 'hor=1 ver=0';

    case 'left':
    return 'hor=-1 ver=0';

    default:
    return 'hor=0 ver=0';
  }
}

getDirection('right');

function findCalculationType(a, b, res) {

  switch (res) {
    case a + b:
    return 'addition';

    case a - b:
    return 'subtraction';

    case a * b:
    return 'multiplication';

    case  a / b:
    return 'division';

    default:
    return 'Não foi possível realizar os cálculos com os valores fornecidos';
  }
}

findCalculationType(1, 2, 3);

function getDrinksWithStep(numberOfGuests, step) {
  let result = 0;

  for(let n = 1 ; n <= numberOfGuests; n += step) {
    

    result += n;
  }
  return result
}

getDrinksWithStep(10, 3); 
getDrinksWithStep(0, 5); 
getDrinksWithStep(5, 3); 
getDrinksWithStep(18, 10); 

