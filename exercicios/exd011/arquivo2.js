function convertToUpperCase(input) {
  return input.toLocaleUpperCase();
}

function convertToLowerCase(input) {
  return input.toLocaleLowerCase();
}

function restoreSpaces(input) {
  return input.replaceAll('-', ' ');
}

function isSubstring(phrase, part) {
 return phrase.includes(part);
};

function getPosition(text, word) {
  return text.indexOf(word);
};

function countConsonants(input) {
  let count = 0;
  const consoantes = 'bcdfghjklmnpqrstvwxz';

for(let i = 0 ; i < input.length ; i++){
  if(consoantes.includes(input[i].toLocaleLowerCase())){
    count += 1;
  };
};
  
  return count;
}; 

function getSum(numbers) {
  let sum = 0;

  for(let value of numbers){
    sum += value;
  };

  return sum;
}

function getSum(numbers) {
  let sum = 0;

  // write code here
  /*for(let value of numbers){
    sum += value;
  };
*/

for(let n = 0 ; n < numbers.length ; n++){
    sum += numbers[n];
};
  return sum;
}

function splitWords(text) {
  let result = [];

  for(let m of text){
      result = text.split(' ');
  };
  return result;
};

function joinWords(words, glue) {
   let result = '';
   for(let w of words){
     result = words.join(glue);
   };
   return result;
};

function getFirstPosition(values, value){
  for(let i = 0 ; i < values.length ; i++){
      if(values[i] === value) return i;
  };
  return -1;
};

function checkWord(words, word) {
  for(let w of words){
    if(words.includes(word)) return true;
  };
  return false;
};

function checkNumber(n) {
  let result = [];
  return result = [n > 0, n % 2 === 0, n % 10 === 0];
};

checkNumber(3);
checkNumber(10);
checkNumber(0);
checkNumber(-1);

function createArray(N) {
  // write code here
  let numbers = [];
  for (let n = 1; n <= N ; n++){
    if(N === 0){
      return [];
    };
  numbers.push(n);
  };
    return numbers
};

createArray(1);
createArray(3);
createArray(0);

function getArraysSum(arr1, arr2) {
  // write code here
  let result = 0;

  for(let i = 0 ; i < arr1.length ; i++){
    result += arr1[i] + arr2[i];
  };

  return result;
};

getArraysSum([1, 2], [3, 4]);
getArraysSum([1, 2, 3, 4], [5, 6, 7, 8]);
getArraysSum([], []); 

function combineArrays(first, second) {
  const result = [];

  for(let i = 0 ; i < first.length ; i++){
    result[i] = first[i] + second[i];
  };
  return result;
};

combineArrays([1, 2, 5], [3, 6, 1]);
combineArrays([1], [6]);
combineArrays([], []);