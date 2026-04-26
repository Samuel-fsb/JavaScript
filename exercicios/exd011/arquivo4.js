const palavra = 'abcdebc';
const parte = 'bc';

console.log(
    palavra.includes(parte), 
    palavra.indexOf(parte), 
    palavra.lastIndexOf(parte), 
    palavra.startsWith(parte),
    palavra.endsWith(parte), 
)

function decodeSignal(input) {
  let signal = Boolean(input);

  if(signal == 1){
    return 1;
  } 

  return 0;
}

const decodeSignal2 = (input) => +!!input;

decodeSignal('abc'); 
decodeSignal('1');
decodeSignal(0); 
decodeSignal(''); 
decodeSignal(null);


const getWinner = (maxSolved, romanSolved) => { 
  let max = +maxSolved;
  let roman = +romanSolved;

  if (max > roman) {
    return 'Max is the winner!!!';
  } 
  if (max < roman) {
    return 'Roman is the winner!!!';
  } 
  if (max == roman) {
  return 'Roman and Maxim are the winners!!!';
  }

 }

getWinner(45, '42');
getWinner('34', 35);
getWinner(24, 28);
getWinner('13', '11'); 
getWinner(15, '15');

function isTidy(n) {
  let prev = 0;

  for(const digit of String(n)) {
    if (prev > digit) {
     return false;
    } 
    prev = digit;
  }
  return true;
}

isTidy(12); 
isTidy(32); 
isTidy(1024);
isTidy(3445); 
isTidy(13579);

function isJumping(n) {
  let number = String(n);

  for (let i = 1 ; i < number.length ; i++) {
    let difference = number[i] - number[i - 1];

    if (difference !== 1 && difference !== -1) {
      return 'NOT JUMPING';
    }
  }
  return 'JUMPING';
}


isJumping(9); 
isJumping(79); 
isJumping(7889);
isJumping(23454); 


function makeAbbr(words) {
  
  let abbreviation = words[0].toUpperCase();

  for (let i = 0 ; i < words.length ; i++) {
    if (words[i] === ' ') {
    abbreviation += words[i + 1].toUpperCase();

    }
  }

  return abbreviation;
}

makeAbbr('national aeronautics space administration');
makeAbbr('central processing unit');
makeAbbr('simplified molecular input line entry specification');

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  let room = adultsCount + childrenCount;
  const maxChilddrenPerAdult = adultsCount * 2;

  if(adultsCount === 0) {
    return false;
  }

  if(room > 8) {
    return false;
  }

  if(maxChilddrenPerAdult >= 8) {
    return true;
  }

  if(childrenCount <= adultsCount * 2) {
    return true;
  }

  return false;
}
