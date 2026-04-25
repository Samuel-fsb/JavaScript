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