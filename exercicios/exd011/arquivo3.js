function doublePower(currentPowers) {
  // write code here
  let result = []
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

makeStickers(3, ‘Body’); // [‘Body detail #1’, ‘Body detail #2’, ‘Body detail #3’]
makeStickers(4, ‘Head’); // [‘Head detail #1’, ‘Head detail #2’, ‘Head detail #3’, ‘Head detail #4’]
makeStickers(0, ‘Foot’);