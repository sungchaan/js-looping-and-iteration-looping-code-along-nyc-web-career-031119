// Code your solutions in this fio
function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array;
}

function tailsNeverFails(){
  let numTails = 0
  while (Math.random() >= 0.5){
    numTails++;
  }
  return `You got ${numTails} tails in a row!`
}
