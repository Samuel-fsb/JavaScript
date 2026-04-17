function getInitials(name, lastName){

  return name[0] + lastName[0];
};

getInitials('Alice', 'Green');
getInitials('Bob', 'Smith');

function printOddOrEven(n){
  if(n % 2 === 0){
    console.log("even");
  } else if(n % 2 !== 0){
    console.log("odd");
  };
};

function checkWordLength(word) {
  if(word.length < 5){
    console.log(word + " is a short word");
  } else if(word.length >= 5){
    console.log(word + " is a long word");
  };
};

function canBuyBeer(age){
  if(age < 18){
    return "You cannot buy beer";
  }
  if(age >= 18){
    return "You can buy beer";
  };
};


function getTipsRating(amount) {
  // write your code here
  if(amount > 50){
    return "excellent";
  }
  if(amount > 20){
    return "great";
  }
  if(amount > 10){
    return "good"
  }
  if(amount > 0){
    return "poor";
  }
    return "terrible";
};

let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
console.log(flowers[1]);

let flowers2 = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
flowers[1] = 'peony';

console.log(flowers);

for(let n = 3; n <= 11 ; n = n + 2){
  console.log(n);
};

for(let n = 2 ; n <= 7 ; n = n + 1){
console.log(n);
};

function factorial(N){
  let f = 1;
  for(let n = 2 ; n <= N ; n++){
   f = n * f;
  };
  return f;
};

factorial(5);

function sumFromTo(min, max){
  let sum = 0;

  for(let n = min ; n <=  max ; n++){
    sum += n;
  };
  return sum;
};

sumFromTo(3, 5);

function printFromTo(input, start, end) {
  
  for(let s = start ; s <= end ; s++){
    console.log(input[s]);
  };
};


function countMs(text) {
  let letras = 0;
  
  for(let i = 0 ; i < text.length ; i++){
    if(text[i] === 'M' || text[i] === 'm'){
      letras += 1;
    };
  };

  return letras;
}

function replaceA(input) {
  let result = '';

    for(let i = 0 ; i < input.length ; i++){
      if(input[i] === 'a' || input[i] === 'A'){
        result += '*';
      }else{
        result += input[i]
      };
    };
      return result;
};


function replaceSpaces(input) {
  let result = '';

  // Write code here
  for(let i = 0; i < input.length ; i++){
    if(input[i] === ' '){
      result += '-'
    }else{
      result += input[i];
    }
  };
  return result;
}