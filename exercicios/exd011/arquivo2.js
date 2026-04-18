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
