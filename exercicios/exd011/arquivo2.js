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