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

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  let total = adultsCount + childrenCount + babiesCount;

  if(adultsCount <= 0) {
    return false;
  }

  if(childrenCount + babiesCount > adultsCount * 2) {
    return false;
  }

  if(babiesCount > adultsCount) {
    return false;
  }

  return total <= 8 || (total === 9 && babiesCount > 0);
}

canTheyBook(0, 1, 1);
canTheyBook(2, 3, 1); 
canTheyBook(2);
canTheyBook(9); 
canTheyBook(8, 1);
canTheyBook(8, 0, 1);
canTheyBook(4, 2, 3); 

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const total = adultsCount + childrenCount + babiesCount;

  if (total <= 4) {
    return 'small room';
  }

  if (total === 5 && babiesCount > 0) {
    return 'small room + extra bed';
  }

  if (total <= 8) {
    return 'big room';
  }

  return 'big room + extra bed';
}

recommendRoom(2, 2, 1);
recommendRoom(2, 1, 1);
recommendRoom(3, 2);
recommendRoom(3, 0, 2);
recommendRoom(7, 0, 2);
recommendRoom(8);

function getOutdated(robots, newVersion) {
  let results = [];

  for (let i = 0 ; i < robots.length ; i++) {
    if (robots[i].coreVersion < newVersion)
    results.push(i);
  }

  return results;
}

getOutdated(robots, 10);
getOutdated(robots, 14); 
getOutdated(robots, 8); 
getOutdated(robots, 18); 

function restoreNames(users) {
  for (let i = 0 ; i < users.length ; i++) {
    if (!users[i].firstName) {
    users[i].firstName = users[i].fullName.split(" ")[0];
    }
  }
}

function countBoxes(boxes) {
  const box = {};

  for (let i = 0 ; i < boxes.length ; i++) {
      if (!box[boxes[i]]) {
        box[boxes[i]] = 0 + 1;
      } else {
        box[boxes[i]]++;
      }
  }

  return box;
}

function isSorted(boxNumbers) {

    for (let i = 1 ; i < boxNumbers.length ; i++) {
        if (boxNumbers[i] < boxNumbers[i - 1]) {
           return false;
        }
    }
    return true;
}

isSorted([1, 2, 3, 4, 5]); 
isSorted([0, 1, 1, 1, 2]);
isSorted([1, 2, 11]);
isSorted([5]);
isSorted([]); 
isSorted([0, 3, 1, 2, 2, 2]); 
isSorted([1, 11, 2]);

function removeVowels(doc) {
 let volwels = '';

 for (let i = 0 ; i < doc.length ; i++) {
      if (!'aeiouy'.includes(doc[i].toLowerCase())) {
      volwels += doc[i];
      }
 }

 return volwels;
}

removeVowels('document'); 
removeVowels('I like my boss'); 
removeVowels('350 euro'); 


function compareRobots(firstRobotResults, secondRobotResults) {
  let robot1 = 0;
  let robot2 = 0;

  for (let i = 0 ; i < firstRobotResults.length ; i++) {
    robot1 += firstRobotResults[i]
  }

  for (let i = 0 ; i < secondRobotResults.length ; i++) {
    robot2 += secondRobotResults[i]
  }

  if (robot1 > robot2) {
    return 'First robot for sale!'
  }

  if (robot1 < robot2) {
    return 'Second robot for sale!';
  }

  return 'Both robots for sale!';
}

compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); 
compareRobots([9, 7, 9], [1, 3, 4, 5, 12]); 
compareRobots([1, 3, 4], [1, 1, 4, 5]); 