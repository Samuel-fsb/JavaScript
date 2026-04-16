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
